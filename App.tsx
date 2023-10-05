import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { ThemeContext, theme } from "./src/contexts/ThemeContext";
import { TodoScreen } from "./src/screens/ToDoScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar barStyle={"light-content"} />
        <TodoScreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray700,
    flex: 1,
  },
});
