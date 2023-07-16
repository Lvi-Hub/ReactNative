import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoBold: require("./fonts/Roboto-Black.ttf"),
    RobotoRegular: require("./fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./fonts/Roboto-Medium.ttf"),
  });
  return (
    <View style={styles.viewContainers}>
      {/* <BackGround /> */}
      <RegistrationScreen />
      {/* <Text>Hello</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainers: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 20,
  },
});
