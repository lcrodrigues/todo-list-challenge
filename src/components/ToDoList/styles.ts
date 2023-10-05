import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
    paddingTop: 24,
  },

  list: { paddingHorizontal: 24, paddingBottom: 24, paddingTop: 20 },
});
