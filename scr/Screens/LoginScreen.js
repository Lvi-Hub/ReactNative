import React, { useEffect, useState } from "react";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Platform,
  Keyboard,
  Dimensions,
  Image,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const { width } = Dimensions.get("screen");
  const avatarWidth = 120;
  const avatarPosition = Math.round(width / 2 - avatarWidth / 2);

  //-- state
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  //-- handlers
  const handleInputFocus = (textinput) => {
    setIsFocused({
      [textinput]: true,
    });
  };
  const handleInputBlur = (textinput) => {
    setIsFocused({
      [textinput]: false,
    });
  };

  //onSignup
  const onSignup = () => {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../img/backgroundImage.jpg")}
          resizeMode="stretch"
          alignSelf="flex-end"
          style={styles.image}
        >
          <View>
            <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.section}>
                <Text style={styles.titleText}>Увійти</Text>
                <View style={styles.inputList}>
                  {/* INPUT : EMAIL */}

                  <TextInput
                    style={[
                      styles.inputLogin,
                      isFocused.email && styles.inputLoginFocus,
                    ]}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor={"#BDBDBD"}
                    onFocus={() => handleInputFocus("email")}
                    onBlur={() => handleInputBlur("email")}
                    value={email}
                    onChangeText={setEmail}
                  ></TextInput>
                  <View>
                    {/*----INPUT : PASSWORD */}

                    <TextInput
                      style={[
                        styles.inputLogin,
                        isFocused.password && styles.inputLoginFocus,
                      ]}
                      placeholder="Пароль"
                      placeholderTextColor={"#BDBDBD"}
                      onFocus={() => handleInputFocus("password")}
                      onBlur={() => handleInputBlur("password")}
                      secureTextEntry={hidePass ? true : false}
                      value={password}
                      onChangeText={setPassword}
                    ></TextInput>
                    <TouchableOpacity
                      style={styles.showPasswordBtn}
                      onPress={() => setHidePass(!hidePass)}
                    >
                      <Text style={styles.showPasswordText}>Показати</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.appButtonContainer}
                  // onPress={() => Alert.alert("Simple Button pressed")}
                  onPress={onSignup}
                >
                  <Text style={styles.appButtonText}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Alert.alert("Simple Button pressed !!!")}
                >
                  <Text style={styles.singInText}>
                    Не має аккаунту? Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    // marginTop: 263,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 144,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-start",
  },

  inputList: {
    gap: 16,
  },

  titleText: {
    marginTop: 32,
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
    color: "#212121",
    backgroundColor: "#F6F6F6",

    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
  },
  inputLoginFocus: {
    borderColor: "#FF6C00",
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
export default LoginScreen;
