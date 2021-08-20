import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import Input from "../components/Input";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import Placeholders from "../constants/Placeholders";
// import { EmailContext } from "./RegisterScreen";
import { AuthContext } from "../navigation/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Password = ({ navigation }) => {
  const toggleSwitch = () => setShowPassword((previousState) => !previousState);
  const [email, setEmail] = useState("");

  const readData = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("@save_email");
      console.log(userEmail);

      if (userEmail !== null) {
        setEmail(userEmail);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };
  useEffect(() => {
    readData();
    console.log("hiii", email);
  }, []);

  // const getData = async () => {
  //   try {
  //     const email = await AsyncStorage.getItem("email");

  //     setEmail(email);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  // const { email } = useContext(EmailContext);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.baseTxt}>
          Thanks for verifying your account.{email}
        </Text>
        <Text style={styles.btmTxt}>Next up: Set up your password.</Text>
      </View>

      <View>
        <Input
          name={Placeholders.password}
          type="password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <Input
          name={Placeholders.confirmpassword}
          type="password"
          secureTextEntry={!showPassword}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txtContainer}>Show Password</Text>

          <Switch
            placeholder="Show Password"
            placeholderTextColor="#808080"
            style={styles.toggler}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            trackColor={{ false: "#ccc", true: "#00808F" }}
            thumbColor={showPassword ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={showPassword}
          />
        </View>
        <Text style={styles.guideTxt}>
          Make sure your password has a minimum of 8 characters, including at
          least one uppercase letter, one lowercase letter and a number.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          register(email, password);
        }}
      >
        <Text style={styles.tellUsbtntxt}>Good to go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: "100%",
    // backgroundColor: "teal",
  },

  baseTxt: {
    fontSize: 26,
    fontWeight: "400",
    marginBottom: 10,
  },
  btmTxt: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    paddingRight: 50,
  },
  btnContainer: {
    position: "absolute",
    height: 56,
    width: 382,
    backgroundColor: "#00808F",
    marginLeft: 14,
    borderRadius: 8,
    justifyContent: "center",
    // backgroundColor: "red",
    bottom: "3%",
  },
  tellUsbtntxt: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },
  guideTxt: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 24,
  },

  txtContainer: {
    fontSize: 18,
    marginLeft: 15,
    marginRight: 200,
    marginBottom: 20,
  },
});
export const screenOptions = (navData) => {
  return {
    headerTitle: "Set a password",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Help"
          IconComponent={Ionicons}
          iconName={Platform.OS == "android" ? "md-help" : "ios-help"}
          onPress={() => {
            navData.navigation.navigate("Need help");
          }}
        />
      </HeaderButtons>
    ),
  };
};

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Switch,
//   Platform,
//   Dimensions,
// } from "react-native";
// import Input from "../components/Input";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import HeaderButton from "../components/HeaderButton";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Placeholders from "../constants/Placeholders";

// const Password = (props) => {
//   const toggleSwitch = () => setShowPassword((previousState) => !previousState);
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <View>
//       <View style={styles.textContainer}>
//         <Text style={styles.baseTxt}>Thanks for verifying your account.</Text>
//         <Text style={styles.btmTxt}>Next up: Set up your password.</Text>
//       </View>

//       <View>
//         <Input
//           name={Placeholders.password}
//           type="password"
//           secureTextEntry={!showPassword}
//         />
//         <Input
//           name={Placeholders.confirmpassword}
//           type="password"
//           secureTextEntry={!showPassword}
//         />
//         <View style={{ flexDirection: "row" }}>
//           <Text style={styles.txtContainer}>Show Password</Text>

//           <Switch
//             placeholder="Show Password"
//             placeholderTextColor="#808080"
//             style={styles.toggler}
//             onPress={() => {
//               setShowPassword(!showPassword);
//             }}
//             trackColor={{ false: "#ccc", true: "#00808F" }}
//             thumbColor={showPassword ? "white" : "#f4f3f4"}
//             ios_backgroundColor="#3e3e3e"
//             onValueChange={toggleSwitch}
//             value={showPassword}
//           />
//         </View>
//         <Text style={styles.guideTxt}>
//           Make sure your password has a minimum of 8 characters, including at
//           least one uppercase letter, one lowercase letter and a number.
//         </Text>
//       </View>

//       <TouchableOpacity
//         style={styles.btnContainer}
//         onPress={() => props.navigation.navigate("Sign in")}
//       >
//         <Text style={styles.tellUsbtntxt}>Good to go</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Password;

// const styles = StyleSheet.create({
//   baseTxt: {
//     fontSize: 26,
//     fontWeight: "400",
//     marginBottom: 10,
//   },
//   btmTxt: {
//     fontSize: 16,
//     fontWeight: "400",
//     lineHeight: 24,
//   },
//   textContainer: {
//     marginHorizontal: 20,
//     marginTop: 30,
//     paddingRight: 50,
//   },
//   btnContainer: {
//     height: 56,
//     width: 382,
//     backgroundColor: "#00808F",
//     marginLeft: 14,
//     borderRadius: 8,
//     justifyContent: "center",
//     top: 120,
//     marginTop: 10,
//   },
//   tellUsbtntxt: {
//     textAlign: "center",
//     fontSize: 18,
//     color: "#FFFFFF",
//   },
//   guideTxt: {
//     fontSize: 16,
//     marginLeft: 15,
//     marginRight: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     lineHeight: 24,
//   },

//   txtContainer: {
//     fontSize: 18,
//     marginLeft: 15,
//     marginRight: 200,
//     marginBottom: 20,
//   },
// });
// export const screenOptions = (navData) => {
//   return {
//     headerTitle: "Set a password",
//     headerRight: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Help"
//           IconComponent={Ionicons}
//           iconName={Platform.OS == "android" ? "md-help" : "ios-help"}
//           onPress={() => {
//             navData.navigation.navigate("Need help");
//           }}
//         />
//       </HeaderButtons>
//     ),
//   };
// };
