import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  box: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  uncheckedDefaultBox: {
    borderColor: theme.colors.blue,
  },

  uncheckedHoverBox: {
    borderColor: theme.colors.blueDark,
    backgroundColor: "#1e6f9f30",
  },

  checkedDefaultBox: {
    borderColor: theme.colors.purpleDark,
    backgroundColor: theme.colors.purpleDark,
  },

  checkedHoverBox: {
    borderColor: theme.colors.purple,
    backgroundColor: theme.colors.purple,
  },
});
