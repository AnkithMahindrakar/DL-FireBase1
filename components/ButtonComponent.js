import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        ...styles.button,
        ...props.buttonStyle,
      }}
    >
      <Text
        style={{
          ...styles.buttonText,
          ...props.textStyle,
        }}
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 16.5,
    backgroundColor: Colors.accent,
    marginHorizontal: 18,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  },
});
