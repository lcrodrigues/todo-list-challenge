import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray700,
    alignItems: "center",
    height: 120,
  },

  logo: {
    marginTop: 24,
  },
});
