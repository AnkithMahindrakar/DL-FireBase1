// import 'react-native-gesture-handler';
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import image from "../assets/intro.png";
import ButtonComponent from "../components/ButtonComponent";
const WindowHeight = Dimensions.get("window").height;
const WindowWidth = Dimensions.get("window").width;
const IntroScreen = (props) => {
  return (
    <ImageBackground source={image} style={styles.bgImage}>
      <SafeAreaView>
        <ButtonComponent
          bgColors="white"
          name="Sign in"
          buttonStyle={styles.signIn}
          textStyle={{ color: "black" }}
          onPress={() => {
            props.navigation.navigate("Sign in");
          }}
        />
        <ButtonComponent
          name="Get set up"
          textStyle={{ color: "white" }}
          buttonStyle={styles.signUp}
          onPress={() => {
            props.navigation.replace("Register");
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  signIn: {
    backgroundColor: "white",
    marginTop: WindowHeight > 800 ? WindowHeight * 0.82 : WindowHeight * 0.75,
    marginVertical: 18,
  },
  signUp: {
    alignItems: "center",
    backgroundColor: null,
    overflow: "hidden",
  },
});
