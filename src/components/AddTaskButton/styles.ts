import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  button: {
    padding: 18,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  defaultButton: {
    backgroundColor: theme.colors.blueDark,
  },

  hoverButton: {
    backgroundColor: theme.colors.blue,
  },
});
