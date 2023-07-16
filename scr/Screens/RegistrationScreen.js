import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Image,
} from "react-native";

const RegistrationScreen = () => {
  const { width } = Dimensions.get("screen");
  const avatarWidth = 120;
  const avatarPosition = Math.round(width / 2 - avatarWidth / 2);

  console.log(avatarPosition);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/backgroundImage.jpg")}
        // resizeMode="cover"
        resizeMode="stretch"
        alignSelf="flex-end"
        style={styles.image}
      >
        <View style={styles.section}>
          <View
            style={[
              styles.avatarContainer,
              { left: avatarPosition, width: avatarWidth },
            ]}
          >
            <TouchableOpacity
              style={styles.avatarBtn}
              onPress={() => Alert.alert("Add Avatar")}
            >
              <Image
                style={styles.avatarIcon}
                source={require("../img/add.png")}
              ></Image>
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>Реєстрація</Text>
          <View style={styles.inputList}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Логін"
            ></TextInput>

            <TextInput
              style={styles.inputLogin}
              placeholder="Адреса електронної пошти"
            ></TextInput>

            <View
              paddingBottom={
                !Platform.OS === "ios" && isKeyboardVisible ? 0 : 20
              }
            >
              <TextInput
                style={styles.inputLogin}
                placeholder="Пароль"
              ></TextInput>

              {(!isKeyboardVisible || Platform.OS === "ios") && (
                <TouchableOpacity
                  style={styles.showPasswordBtn}
                  onPress={() => Alert.alert("Simple Button pressed")}
                >
                  <Text style={styles.showPasswordText}>Показати</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {(!isKeyboardVisible || Platform.OS === "ios") && (
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() => Alert.alert("Simple Button pressed")}
            >
              <Text style={styles.appButtonText}>Зареєструватися</Text>
            </TouchableOpacity>
          )}

          {(!isKeyboardVisible || Platform.OS === "ios") && (
            <TouchableOpacity
              onPress={() => Alert.alert("Simple Button pressed !!!")}
            >
              <Text
                style={[
                  styles.singInText,
                  {
                    paddingBottom:
                      Platform.OS === "ios" && isKeyboardVisible ? 220 : 78,
                  },
                ]}
              >
                Вже є акаунт? Увійти
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    position: "relative",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
  },

  section: {
    marginTop: 263,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-start",
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 10,
  },
  avatarBtn: {
    flex: 1,
    position: "relative",
  },
  avatarIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 81,
    right: -12,
  },

  inputList: {
    gap: 16,
  },

  titleText: {
    marginTop: 92,
    paddingBottom: 32,
    fontFamily: "RobotoMedium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35.16,
    color: "#212121",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  inputLogin: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    fontFamily: "RobotoRegular",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",

    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
  },
  showPasswordBtn: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showPasswordText: {
    color: "#1B4371",
  },
  appButtonContainer: {
    marginTop: 27,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  appButtonText: {
    fontFamily: "RobotoRegular",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 18.75,
    alignSelf: "center",
    color: "#FFFFFF",
  },
  singInText: {
    marginTop: 16,
    justifyContent: "center",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#1B4371",
  },
});
export default RegistrationScreen;
