import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import ButtonComponent from "./ButtonComponent";

const Card = (props) => {
  // console.log(props);
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={props.img} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.desc}>{props.description} </Text>
        </View>
      </View>
      <ButtonComponent
        name={props.btnName}
        buttonStyle={styles.btnStyle}
        textStyle={styles.textStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 384,
    height: 392,
  },
  cardContainer: {
    alignItems: "center",
    width: "100%",
    height: 480,
    backgroundColor: Colors.secondary,
  },
  titleContainer: {
    width: "100%",
    height: 48,
    top: 34,
    left: -7,
    position: "absolute",
  },
  title: {
    fontSize: 18,
    color: "#2A2A2A",
    fontWeight: "bold",
    top: 363,
  },
  desc: {
    fontSize: 16,
    top: 363,
  },
  btnStyle: {
    width: "30%",
    padding: 6,
    marginLeft: -8,
    marginVertical: null,
    backgroundColor: null,
    borderColor: "#aaa",
    borderWidth: 1,
    marginHorizontal: null,
    marginBottom: 30,
    marginTop: -20,
  },
  textStyle: {
    color: "black",
    fontSize: 14,
  },
});

export default Card;
