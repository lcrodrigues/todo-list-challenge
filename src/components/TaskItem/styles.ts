import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    height: 64,
    backgroundColor: theme.colors.gray500,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 4,
    alignItems: "center",
    padding: 8,
    justifyContent: "space-between",
    gap: 12,
  },

  doneContainer: {
    borderColor: "transparent",
  },

  toDoContainer: {
    borderColor: theme.colors.gray400,
  },

  text: {
    flex: 1,
    fontFamily: theme.typography.regular,
    fontSize: theme.typography.sizes.medium,
  },

  toDoText: {
    color: theme.colors.gray100,
  },

  doneText: {
    color: theme.colors.gray300,
    textDecorationLine: "line-through",
  },
});
