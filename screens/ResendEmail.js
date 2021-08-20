import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

const ForgetPasswordEmailVerification = (props) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.topText}>One last thing before you begin.</Text>
        <Text style={styles.descText}>
          To make sure it's you, we sent an email to your**Registered email
          address**
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.topText}>Not there ?</Text>
        <Text style={styles.descText}>Peek in your junk folder. {"\n"}</Text>
        <Text style={styles.topText}>Too busy right now ?</Text>
        <Text style={styles.descText}>You've got a whole 24 Hours.</Text>
      </View>

      <ButtonComponent
        name="Resend"
        buttonStyle={styles.btnContainer}
        onPress={() => {
          props.navigation.navigate("Verification");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // backgroundColor: '#E5E5E5',
  },
  btnContainer: {
    top: 260,
  },
  tellUsbtntxt: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },
  baseText: {
    fontSize: 26,
    top: 10,
    marginLeft: 10,
    marginTop: 10,
    lineHeight: 32,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
    top: 10,
    marginLeft: 10,
    marginTop: 14,
  },
  bottomTxt: {
    fontSize: 16,
    top: 10,
    marginLeft: 10,
    marginTop: 10,
    lineHeight: 24,
    color: "grey",
  },
  topText: {
    fontSize: 26,
    fontWeight: "400",
    marginBottom: 10,
  },
  descText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: "black",
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    paddingRight: 50,
  },
});

export default ForgetPasswordEmailVerification;
