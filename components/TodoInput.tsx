import { ThemeContext } from "@/themes/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function TodoInput() {
  const { theme } = React.useContext(ThemeContext);
  const [val, setVal] = React.useState("");

  return (
    <View style={[styles.container]}>
      <View style={[styles.inputCard, { backgroundColor: theme.panelElev, borderColor: theme.cardBorder }]}>
        <TouchableOpacity style={styles.circle}>
          <Ionicons name="ellipse-outline" size={20} color={theme.textMuted} />
        </TouchableOpacity>

        <TextInput
          placeholder="Create a new todo..."
          placeholderTextColor={theme.textMuted}
          value={val}
          onChangeText={setVal}
          style={[styles.input, { color: theme.textPrimary, fontFamily: "Poppins-Regular" }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 6, marginBottom: 12 },
  inputCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    padding: 14,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    elevation: 5,
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  input: { flex: 1, fontSize: 15 },
});
