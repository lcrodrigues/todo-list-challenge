import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },

  text: {
    fontFamily: theme.typography.bold,
    fontSize: theme.typography.sizes.small,
    color: theme.colors.gray200,
  },
});
