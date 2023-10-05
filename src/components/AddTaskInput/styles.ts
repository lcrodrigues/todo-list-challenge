import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  textInput: {
    padding: 16,
    flex: 1,
    backgroundColor: theme.colors.gray500,
    height: 54,
    borderRadius: 6,
    color: theme.colors.gray100,
    fontFamily: theme.typography.regular,
    fontSize: theme.typography.sizes.large,
  },
});
