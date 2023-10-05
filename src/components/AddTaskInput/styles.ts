import { StyleSheet } from "react-native";
import { theme } from "../../contexts/ThemeContext";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 54,
    gap: 4,
  },

  topHalf: {
    backgroundColor: theme.colors.gray700,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "50%",
  },

  bottomHalf: {
    backgroundColor: theme.colors.gray600,
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
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
