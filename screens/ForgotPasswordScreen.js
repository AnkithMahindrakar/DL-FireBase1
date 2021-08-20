import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import Colors from "../constants/Colors";
import Placeholders from "../constants/Placeholders";
import ButtonComponent from "../components/ButtonComponent";

const ForgotPasswordScreen = (props) => {
  // const [isFloatOnMail, setIsFloatOnMail] = useState(false);
  // const [email, setEmail] = useState('');
  // const [isFocuedOnMail, setIsFocuedOnMail] = useState(false);
  // const onEmailChangeHandler = email => {
  //   setEmail(email);
  // };

  return (
    <View>
      <View style={styles.slippedTxtContainer}>
        <Text style={styles.slippedTxt}>Slipped your mind? No problem.</Text>
      </View>
      <View style={styles.justenterTxtContainer}>
        <Text style={styles.justenterTxt}>
          Just enter your email, and we’ll help you set up a new one.
        </Text>
      </View>
      <Input
        name={Placeholders.email}
        type="emailAddress"
        // inputStyle={styles.input}
      />
      <ButtonComponent
        name="Continue"
        onPress={() => {
          props.navigation.navigate("Verification");
        }}
        buttonStyle={styles.btnstyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  slippedTxtContainer: {
    // backgroundColor: 'red',
    height: 50,
    left: 13,
    top: 36,
  },
  slippedTxt: {
    fontSize: 26,
  },
  justenterTxtContainer: {
    // position: 'relative',
    // backgroundColor: 'teal',
    top: 60,
    left: 15,
    height: 48,
    width: 383,
    marginBottom: 100,
  },
  justenterTxt: {
    fontSize: 16,
    lineHeight: 24,
  },
  emailContainer: {
    // backgroundColor: 'green',
    // position: 'relative',
    top: 110,
  },
  placeholderStyle: {
    // position: 'relative',
    left: 20,
    top: 60,
  },
  placeholderText: {
    color: "#ccc",
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    padding: 16.5,
    backgroundColor: Colors.accent,
    marginHorizontal: 18,
    borderRadius: 8,
    marginVertical: 30,
    top: 380,
  },
  signInButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  },
  input: {
    top: 150,
  },
  btnstyle: {
    top: 280,
  },
});

export default ForgotPasswordScreen;
