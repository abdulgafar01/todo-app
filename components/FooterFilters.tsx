import { ThemeContext } from "@/themes/ThemeProvider";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FooterFilters() {
  const { theme } = React.useContext(ThemeContext);
  const [active, setActive] = React.useState("All");

  return (
    <View style={[styles.footer, { borderTopColor: theme.cardBorder }]}>
      <Text style={[styles.leftText, { color: theme.textMuted }]}>5 items left</Text>

      <View style={styles.filters}>
        {["All", "Active", "Completed"].map((t) => (
          <TouchableOpacity key={t} onPress={() => setActive(t)} style={{ paddingHorizontal: 8 }}>
            <Text style={[styles.filterText, { color: active === t ? theme.accent : theme.textMuted }]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity>
        <Text style={{ color: theme.textMuted }}>Clear Completed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderRadius: 0,
    marginTop: 6,
  },
  leftText: { fontSize: 13 },
  filters: { flexDirection: "row" },
  filterText: { fontSize: 14 },
});
