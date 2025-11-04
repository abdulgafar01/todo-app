import FooterFilters from "@/components/FooterFilters";
import Header from "@/components/Header";
import TodoCard from "@/components/TodoCard";
import TodoInput from "@/components/TodoInput";
import { ThemeContext } from "@/themes/ThemeProvider";
import React from "react";
import {
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
// import Header from "../components/Header";
// import TodoInput from "../components/TodoInput";
// import TodoCard from "../components/TodoCard";
// import FooterFilters from "../components/FooterFilters";

const { width } = Dimensions.get("window");

const sampleTodos = [
  { id: "1", title: "Complete online JavaScript course", done: true },
  { id: "2", title: "Jog around the park 3x", done: false },
  { id: "3", title: "10 minutes meditation", done: false },
  { id: "4", title: "Read for 1 hour", done: false },
  { id: "5", title: "Pick up groceries", done: false },
  { id: "6", title: "Complete Todo App on Frontend Mentor", done: false },
];

export default function TodoScreen() {
  const { theme, isDark, transition } = React.useContext(ThemeContext);

  // crossfade opacity for hero images
  const heroOpacity = transition.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Hero */}
      <View style={{ height: 260 }}>
        <ImageBackground source={theme.heroImage} style={styles.hero}>
          <Header />
        </ImageBackground>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.panel, { backgroundColor: theme.panel }]}>
          <TodoInput />
          <View style={styles.list}>
            {sampleTodos.map((t) => (
              <TodoCard key={t.id} title={t.title} done={t.done} />
            ))}
          </View>

          <FooterFilters />
        </View>

        <Text style={[styles.dragHint, { color: theme.textMuted }]}>Drag and drop to reorder list</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 18,
    paddingHorizontal: 28,
  },
  content: {
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 60,
  },
  panel: {
    width: width * 0.76,
    marginTop: -56,
    borderRadius: 8,
    padding: 10,
    // shadow / elevation will be applied inline in components based on theme
  },
  list: {
    marginTop: 6,
  },
  dragHint: {
    marginTop: 36,
    fontSize: 13,
    textAlign: "center",
    opacity: 0.9,
  },
});
