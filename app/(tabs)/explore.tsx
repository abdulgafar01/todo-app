import { ThemeContext } from "@/themes/ThemeProvider";
import React from "react";
import { Text, View } from "react-native";

export default function Explore() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: theme.textPrimary, fontSize: 18 }}>
        Explore page (coming soon)
      </Text>
    </View>
  );
}
