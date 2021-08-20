//import liraries
import React, { Component } from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const Width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
// create a component
const MoreScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.moreContainer}>
        <Text style={styles.moreTxt}>DL/More</Text>
      </View>
      <View style={styles.MLcontainer}>
        <Text style={styles.MLTxt}>ML</Text>
      </View>
      <View style={styles.MyAccountContainer}>
        <Text style={styles.MyAccountTxt}>My Account</Text>
      </View>
      <View style={styles.border} />
      <View style={styles.ViewContainer}>
        <TouchableOpacity
          style={styles.DiscoverContainer}
          onPress={() => {
            props.navigation.navigate("DiscoverScreen");
          }}
        >
          <Image
            style={styles.iconContainer}
            source={require("../assets/searchIcon.png")}
          />
          <Text>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.DiscoverContainer}
          onPress={() => {
            props.navigation.navigate("WestEndScreen");
          }}
        >
          <Image
            style={styles.iconContainer}
            source={require("../assets/officeIcon.png")}
          />
          <Text>Offices</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.DiscoverContainer}
          onPress={() => {
            props.navigation.navigate("NoticeboardScreen");
          }}
        >
          <Image
            style={styles.iconContainer}
            source={require("../assets/noticeIcon.png")}
          />
          <Text>Noticeboard</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.border} />
      <View style={styles.DerwentContainer}>
        <Text style={styles.DerwentTxt}>Derwent information</Text>
      </View>
      <View style={styles.border2} />
      <View style={styles.container1}>
        <Text style={styles.AboutUsTxt}>About Us</Text>
      </View>

      <View style={styles.border2} />
      <View style={styles.container1}>
        <Text style={styles.AboutUsTxt}>Get in touch</Text>
      </View>
      <View style={styles.border2} />
      <View style={styles.container1}>
        <Text style={styles.AboutUsTxt}>Legal</Text>
      </View>
      <View style={styles.border2} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  moreContainer: {
    width: "93%",
    height: 60,
    // backgroundColor: "teal",
    marginTop: 30,
  },
  moreTxt: {
    fontSize: 36,
  },
  MLcontainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#00808F",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  MLTxt: {
    fontSize: 24,
    fontWeight: "bold",
  },
  MyAccountContainer: {
    width: 92,
    height: 24,

    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  MyAccountTxt: {
    fontSize: 16,
  },
  border: {
    height: 2,
    width: "93%",
    backgroundColor: "#2A2A2A",
    marginTop: 16,
  },
  ViewContainer: {
    flexDirection: "row",
    height: 120,
    width: "93%",
    // backgroundColor: "yellow",
    justifyContent: "space-between",
    marginTop: 16,
  },
  DiscoverContainer: {
    height: 120,
    width: 108,
    borderRadius: 8,
    borderColor: "#00808F",
    borderWidth: 2,
    alignItems: "center",
  },
  iconContainer: {
    height: 72,
    width: 72,
    marginTop: 14,
  },

  DerwentContainer: {
    width: "93%",
    height: 32,
    // backgroundColor: "yellow",
    marginTop: 30,
  },
  DerwentTxt: {
    fontSize: 26,
  },
  border2: {
    height: 0.5,
    width: "93%",
    backgroundColor: "#000",
    marginVertical: 18,
  },
  container1: {
    height: 19,
    width: "93%",
    // backgroundColor: "yellow",
  },
});

//make this component available to the app
export default MoreScreen;
