import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 48,
    gap: 16,
  },

  text: {
    fontSize: theme.typography.sizes.medium,
    color: theme.colors.gray300,
    width: "100%",
    textAlign: "center",
  },

  title: {
    fontFamily: theme.typography.bold,
  },

  message: {
    fontFamily: theme.typography.regular,
  },
});
