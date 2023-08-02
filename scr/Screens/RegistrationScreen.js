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
  SafeAreaView,
} from "react-native";

const RegistrationScreen = () => {
  const { width } = Dimensions.get("screen");
  const avatarWidth = 120;
  const avatarPosition = Math.round(width / 2 - avatarWidth / 2);

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  //-- state
  const [isFocused, setIsFocused] = useState({
    login: false,
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

  //onSignin
  const onSignin = () => {
    console.log(`Login: ${login}`);
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
          <View style={styles.section}>
            <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
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
                  style={[
                    styles.inputLogin,
                    isFocused.login && styles.inputLoginFocus,
                  ]}
                  placeholder="Логін"
                  placeholderTextColor={"#BDBDBD"}
                  onFocus={() => handleInputFocus("login")}
                  onBlur={() => handleInputBlur("login")}
                  value={login}
                  onChangeText={setLogin}
                ></TextInput>

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
                onPress={onSignin}
              >
                <Text style={styles.appButtonText}>Зареєструватися</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => Alert.alert("Simple Button pressed !!!")}
              >
                <Text style={styles.singInText}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
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
    // flex: 1,
    // marginTop: 263,
    marginTop: 200,
    paddingBottom: 76,
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
    // flex: 1,
    gap: 16,
  },

  inputItem: {
    color: "#212121",
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
export default RegistrationScreen;
