import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SendEmail = (props) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.topText}>One last thing before you begin.</Text>
        <Text style={styles.descText}>
          To make sure it's you, we sent an email to your registered email
          address.
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.topText}>Not there ?</Text>
        <Text style={styles.descText}>Peek in your junk folder. {"\n"}</Text>
        <Text style={styles.topText}>Too busy right now ?</Text>
        <Text style={styles.descText}>You've got a whole 24 Hours.</Text>
      </View>

      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => props.navigation.navigate("ResendEmail")}
      >
        <Text style={styles.tellUsbtntxt}>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 56,
    width: 382,
    backgroundColor: "#00808F",
    marginLeft: 15,
    // top: 188,
    borderRadius: 8,
    justifyContent: "center",
    top: 280,
  },
  tellUsbtntxt: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },
  baseText: {
    fontSize: 25,
    top: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  bottomTxt: {
    fontSize: 15,
    top: 10,
    marginLeft: 10,
    marginTop: 10,
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
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    paddingRight: 50,
  },
});

export default SendEmail;
