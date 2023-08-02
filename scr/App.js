import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./Screens/LoginScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./Fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./Fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./Fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.viewContainers} onLayout={onLayoutRootView}>
      {/* <BackGround /> */}
      <LoginScreen />
      {/* <RegistrationScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainers: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justäifyContent: "center",
    // paddingTop: 20,
  },
});
