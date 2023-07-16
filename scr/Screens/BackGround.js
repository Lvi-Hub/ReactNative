// import React from "react";
// import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

// const BackGround = () => (
//   <View style={styles.container}>
//     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//       <Text style={styles.text}>Inside</Text>
//     </ImageBackground>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0",
//   },
// });

// export default BackGround;

import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";

const BackGround = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View> */}
        <View style={styles.inputList}>
          <Text style={styles.text}>Реєстрація</Text>
          <TextInput style={styles.inputLogin} placeholder="Логін"></TextInput>

          <TextInput
            style={styles.inputLogin}
            placeholder="Адреса електронної пошти"
          ></TextInput>

          <View>
            <TextInput
              style={styles.inputLogin}
              placeholder="Пароль"
            ></TextInput>

            <TouchableOpacity
              style={styles.showPasswordBtn}
              onPress={() => Alert.alert("Simple Button pressed")}
            >
              <Text style={styles.showPasswordText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    // justifyContent: "space-around",
    justifyContent: "flex-end",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  section: {
    marginTop: 263,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 34,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-start",
  },

  inputList: {
    flex: 1,
    gap: 16,
    marginTop: 263,
    justifyContent: "flex-end",
    // marginTop: "50%",
    // justifyContent: "space-around",
  },
  inputLogin: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    // border: "solid 1px #E8E8E8",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
  },
  text: {
    marginTop: 263,
    paddingTop: 92,
    paddingBottom: 32,
    color: "#212121",
    fontSize: 30,
    lineHeight: 35.16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
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
    marginTop: 43,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  appButtonText: {
    alignSelf: "center",
    color: "#FFFFFF",
  },
  singInText: {
    marginTop: 16,
    paddingBottom: 78,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default BackGround;
