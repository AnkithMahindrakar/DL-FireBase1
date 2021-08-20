import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
const Verification = (props) => {
  return (
    <View>
      <View>
        <Text style={styles.baseText}>Hanging on for verification</Text>
      </View>
      <ButtonComponent
        name="Confirm"
        buttonStyle={styles.btnContainer}
        onPress={() => {
          props.navigation.navigate("Password");
        }}
      />
      {/* <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          props.navigation.navigate("Password");
        }}
      >
        <Text style={styles.tellUsbtntxt}>Confirm</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  baseText: {
    fontSize: 50,
    marginLeft: 30,
    marginTop: 30,
    marginRight: 30,
    top: 100,
    color: "#808080",
    fontWeight: "bold",
  },
  btnContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.6,
  },

  tellUsbtntxt: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },
});
