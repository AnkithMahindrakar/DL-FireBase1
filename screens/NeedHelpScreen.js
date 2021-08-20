import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SectionButton from "../components/SectionButton";
import Colors from "../constants/Colors";
import { AuthContext } from "../navigation/AuthProvider";

const WindowHeight = Dimensions.get("window").height;
const NeedHelpScreen = (props) => {
  const { logout } = useContext(AuthContext);

  const [isSelected, setIsSelected] = useState(false);
  // const [registerOptions, setRegisterOptions] = useState(false);
  const [signinOptions, setSigninOptions] = useState(true);
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            ...{
              borderBottomColor: !isSelected ? null : Colors.tint,
              borderBottomWidth: !isSelected ? null : 2,
              padding: 4,
            },
          }}
          onPress={() => {
            setIsSelected((prevState) => !prevState);
            // setRegisterOptions((prevState) => !prevState);
            setSigninOptions((prevState) => !prevState);
          }}
        >
          <Text
            style={{
              ...styles.text,
              ...{ color: !isSelected ? Colors.accent : "black" },
            }}
          >
            Registering
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.button,
            ...{
              borderBottomColor: isSelected ? null : Colors.tint,
              borderBottomWidth: isSelected ? null : 2,
              padding: 4,
            },
          }}
          onPress={() => {
            setIsSelected((prevState) => !prevState);
            // setRegisterOptions((prevState) => !prevState);
            setSigninOptions((prevState) => !prevState);
          }}
        >
          <Text
            style={{
              ...styles.text,
              ...{ color: isSelected ? Colors.accent : "black" },
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>
            Check the following topics to find out how to fix the problem.
          </Text>
        </View>
        {/* <TouchableOpacity style={styles.sectionContainer}>
          <View style={styles.sectionView}>
            <Text style={styles.sectionText}>
              My email address isn’t recognised
            </Text>
            <Icon name="chevron-forward" size={24} color="grey" />
          </View>
        </TouchableOpacity> */}
        <SectionButton
          name={
            signinOptions
              ? "My email address isn’t recognised"
              : "How do I get a work email address?"
          }
          iconName="chevron-forward"
          iconColor="grey"
          btnStyle={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
        />
        <SectionButton
          name={
            signinOptions
              ? "Why have I been locked out of my account?"
              : "My email address isn’t recognised"
          }
          iconName="chevron-forward"
          iconColor="grey"
          btnStyle={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
        />
        <SectionButton
          name={
            signinOptions
              ? "I’ve forgotten my password"
              : "I haven’t received my verification email"
          }
          iconName="chevron-forward"
          iconColor="grey"
        />
        <SectionButton
          name={"It says my account already exists"}
          iconName="chevron-forward"
          iconColor="grey"
          btnStyle={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
        />
        <SectionButton
          name={"Can I have access to the tenant web portal"}
          iconName="chevron-forward"
          iconColor="grey"
          btnStyle={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
        />
        <SectionButton
          name={"I’m having technical problems"}
          iconName="chevron-forward"
          iconColor="grey"
          btnStyle={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
        />
        <TouchableOpacity
          style={styles.resposiblilityContainer}
          onPress={() => {
            logout();
          }}
        >
          <Text style={styles.txtResposiblility}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NeedHelpScreen;

export const screenOptions = (navData) => {
  return {
    headerTitle: "Need help?",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 30,
  },
  button: {
    marginRight: 50,
  },
  text: {
    fontSize: 20,
    color: Colors.accent,
  },
  heading: {
    margin: 20,
  },
  headingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  resposiblilityContainer: {
    width: "40%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderColor: "#444444",
    borderWidth: 2,
    // marginRight: "0%",
    // right: 40,
    alignSelf: "center",
    marginTop: 15,
    // padding: 30,
  },
  txtResposiblility: {
    fontSize: 20,
  },
  // sectionContainer: {
  //   margin: 20,
  //   padding: 10,
  //   borderBottomColor: "#ccc",
  //   // borderTopColor: "#ccc",
  //   borderBottomWidth: 1,
  //   // borderTopWidth: 1,
  // },
  // sectionView: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginBottom: 10,
  // },
  // sectionText: {
  //   fontSize: 16,
  // },
});
