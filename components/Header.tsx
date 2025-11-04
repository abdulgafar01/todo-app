import { ThemeContext } from "@/themes/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const { toggle, isDark, theme } = React.useContext(ThemeContext);

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: theme.textPrimary, fontFamily: "Poppins-SemiBold" }]}>
        TODO
      </Text>

      <TouchableOpacity
        accessibilityLabel="Toggle theme"
        onPress={toggle}
        style={styles.iconWrap}
      >
        <Ionicons name={isDark ? "sunny" : "moon"} size={22} color={theme.textPrimary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 36,
    letterSpacing: 6,
  },
  iconWrap: {
    padding: 8,
  },
});
