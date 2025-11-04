import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Animated, Easing } from "react-native";
import { dark as darkTheme, light as lightTheme } from "./themes";

const STORAGE_KEY = "TODO_APP_THEME_v1";

export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggle: () => {},
  isDark: false,
  transition: new Animated.Value(0),
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false);
  const transition = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    (async () => {
      try {
        const s = await AsyncStorage.getItem(STORAGE_KEY);
        const initialDark = s === "dark";
        setIsDark(initialDark);
        transition.setValue(initialDark ? 1 : 0);
      } catch (e) {}
    })();
  }, []);

  const toggle = React.useCallback(async () => {
    const next = !isDark;
    Animated.timing(transition, {
      toValue: next ? 1 : 0,
      duration: 380,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: true,
    }).start();
    setIsDark(next);
    await AsyncStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  }, [isDark, transition]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggle, isDark, transition }}>
      {children}
    </ThemeContext.Provider>
  );
};
