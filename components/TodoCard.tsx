import { ThemeContext } from "@/themes/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoCard({ title, done }: { title: string; done?: boolean }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={[styles.card, { borderColor: theme.cardBorder, backgroundColor: theme.panel }]}>
      <TouchableOpacity style={styles.left}>
        <View style={[styles.checkCircle, { borderColor: theme.cardBorder }]}>
          {done && (
            <View style={[styles.dot, { backgroundColor: theme.accent }]}>
              <Ionicons name="checkmark" size={14} color="#fff" />
            </View>
          )}
        </View>
      </TouchableOpacity>

      <Text
        style={[
          styles.title,
          {
            color: done ? theme.textMuted : theme.textPrimary,
            textDecorationLine: done ? "line-through" : "none",
            fontFamily: "Poppins-Regular",
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderTopWidth: 1,
  },
  left: { marginRight: 12 },
  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 16, flex: 1 },
});
