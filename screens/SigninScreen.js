import React, { useState, useContext } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Input from "../components/Input";
import Placeholders from "../constants/Placeholders";
import ButtonComponent from "../components/ButtonComponent";
import { AuthContext } from "../navigation/AuthProvider";

const WindowHeight = Dimensions.get("window").height;
const WindowWidth = Dimensions.get("window").width;
const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView>
      <KeyboardAvoidingView enabled={true} style={styles.screen}>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.topText}>Before you explore</Text>
            <Text style={styles.descText}>
              Sign in to get the fully personalised experience.
            </Text>
          </View>
          <Input
            name={Placeholders.email}
            type="emailAddress"
            value={email}
            onChangeText={setEmail}
          />

          <Input
            name={Placeholders.password}
            type="password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.toggler}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            {!showPassword ? (
              <Text style={styles.toggleText}>Show it</Text>
            ) : (
              <Text style={styles.toggleText}>Hide it</Text>
            )}
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              name="Sign in"
              onPress={() => {
                login(email, password);
              }}
            />
            <ButtonComponent
              name="Forgotten your password ?"
              buttonStyle={{ backgroundColor: null }}
              textStyle={styles.ForgottenButtonText}
              onPress={() => {
                props.navigation.navigate("Forgotten your password?");
              }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              {/* <Button
                title="event Screen"
                onPress={() => {
                  props.navigation.navigate("EventScreen");
                }}
              />
              <Button
                title="Available screen"
                onPress={() => {
                  props.navigation.navigate("AvailableScreen");
                }}
              /> */}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SigninScreen;

export const screenOptions = (navData) => {
  return {
    headerTitle: "Sign In",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Help"
          IconComponent={Ionicons}
          iconName={Platform.OS === "android" ? "md-help" : "ios-help"}
          onPress={() => {
            navData.navigation.navigate("NeedHelp");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.secondary,
    // alignItems: 'center',
    justifyContent: WindowHeight > 800 ? "space-evenly" : "center",
  },
  button: {
    alignItems: "center",
    padding: 16.5,
    backgroundColor: Colors.accent,
    marginHorizontal: 18,
    borderRadius: 8,
    marginVertical: 30,
  },
  signInButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  },
  ForgottenButtonText: {
    color: Colors.accent,
    fontSize: 18,
    fontWeight: "bold",
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
  passwordToggle: {
    flexDirection: "row",
  },
  toggler: {
    position: "relative",
    left: 100,
    top: -55,
    marginLeft: "58%",
    padding: 0,
  },
  toggleText: {
    color: Colors.accent,
    fontWeight: "600",
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: WindowHeight > 800 ? WindowHeight * 0.25 : WindowHeight * 0.07,
    flexDirection: "column",
  },
  placeholderStyle: {
    position: "relative",
    left: 20,
    top: 60,
  },
  placeholderText: {
    color: "#ccc",
    fontSize: 20,
  },
});
