import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  text: {
    fontFamily: theme.typography.bold,
    fontSize: theme.typography.sizes.medium,
  },

  createdText: {
    color: theme.colors.blue,
  },

  doneText: {
    color: theme.colors.purple,
  },
});
