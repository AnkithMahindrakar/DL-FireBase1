import React from "react";
// <<<<<<< HEAD
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// =======
// import { View, Text, Image, StyleSheet } from "react-native";
// import ButtonComponent from "./ButtonComponent";
// >>>>>>> upstream/main

const Card = (props) => {
  // console.log(props);
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={props.isPressed}>
      <View style={{ ...styles.cardContainer, ...props.MainContainer }}>
        <Image style={styles.image} source={{ uri: props.img }} />
        <View
          style={{ ...styles.titleContainer, ...props.TitleTxtStyleContainer }}
        >
          <Text style={{ ...styles.title, ...props.TitleTxtStyle }}>
            {props.title}
          </Text>
          <Text style={{ ...styles.desc, ...props.descTxtStyle }}>
            {props.description}{" "}
          </Text>
        </View>
      </View>

      <View style={styles.borderDivider} />
    </TouchableOpacity>
    // =======
    //       {/* <View style={styles.borderDivider} /> */}
    //     </>
    // >>>>>>> upstream/main
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
    // backgroundColor: "teal",
  },
  titleContainer: {
    width: "100%",
    height: 48,
    top: 34,
    left: 15,
    position: "absolute",
  },
  title: {
    fontSize: 20,
    color: "#2A2A2A",
    fontWeight: "bold",
    top: 363,
  },
  desc: {
    fontSize: 17,
    top: 367,
    lineHeight: 24,
    color: "#2A2A2A",
  },
  borderDivider: {
    width: 384,
    backgroundColor: "black",
    height: 2,
    marginBottom: 16,
    left: 16,
    opacity: 0.3,
  },
});

export default Card;
