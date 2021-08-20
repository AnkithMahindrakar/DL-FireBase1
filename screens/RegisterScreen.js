import React, { useState, createContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import Input from "../components/Input";
import Placeholders from "../constants/Placeholders";
import CheckBox from "@react-native-community/checkbox";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import Colors from "../constants/Colors";
import ButtonComponent from "../components/ButtonComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const WindowHeight = Dimensions.get("window").height;
const WindowWidth = Dimensions.get("window").width;
// const STORAGE_KEY = "@save_email";
// console.log(STORAGE_KEY);
// const EmailContext = createContext();
const RegisterScreen = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [email, setEmail] = useState();

  // useEffect(() => {
  //   storeData();
  // }, []);

  // const storeData = async (email) => {
  //   try {
  //     await AsyncStorage.setItem("@email", email);
  //     console.log("1", email);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // console.log("2", email);
  // const [password, setPassword] = useState("");
  ////////////////////////////////////////////////////////////////////////
  const saveEmail = async () => {
    try {
      await AsyncStorage.setItem("@save_email", email);
      // console.log(email);
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("Storage successfully cleared!");
    } catch (e) {
      alert("Failed to clear the async storage.");
    }
  };

  const onChangeText = (email) => setEmail(email);

  const onSubmitEditing = () => {
    if (!email) return alert("Enter Email address");

    saveEmail(email);
    setEmail();
    // console.log("3", email, saveEmail());
  };

  return (
    // <EmailContext.Provider value={email}>
    <ScrollView>
      <View style={styles.textContainer}>
        <Text style={styles.baseText}>Let’s make it personal.</Text>
        <Text style={styles.btmText}>
          Just share a few details, and we’ll get you started.
        </Text>
      </View>

      <Input
        name={Placeholders.email}
        type="emailAddress"
        placeholder="Work Email address"
        value={email}
        onChangeText={onChangeText}
        // onSubmitEditing={onSubmitEditing}
      />
      <Input
        name={Placeholders.Fname}
        type="middleName"
        placeholder="First Name"
      />
      <Input
        name={Placeholders.Sname}
        type="familyName"
        placeholder="Surname "
      />

      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Item label="Job role" value="Job role" />
        <Item label="Associate" value="Associate" />
        <Item label="Executive" value="Executive" />
        <Item label="Manager" value="Manager" />
        <Item label="Senior Manager" value="Senior Manager" />
        <Item label="Director" value="Director" />
        <Item label="Founder" value="Founder" />
      </Picker>
      <View style={styles.label}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={setToggleCheckBox}
          tintColors={{ true: Colors.tint, false: "black" }}
        />
        <Text>I'm happy with the</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Terms")}>
          <Text style={styles.teext}> Terms and Conditions </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.label2}>
        <Text> and </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Privacy")}>
          <Text style={styles.teext}> Privacy Policy </Text>
        </TouchableOpacity>
      </View>
      <ButtonComponent
        name="Continue"
        onPress={() => {
          email && toggleCheckBox
            ? props.navigation.navigate("SendEmail")
            : null;
          !email && toggleCheckBox ? alert("enter email") : onSubmitEditing();
        }}
        buttonStyle={{
          backgroundColor: toggleCheckBox ? Colors.accent : "#ccc",
        }}
        textStyle={{ color: toggleCheckBox ? "white" : "black" }}
      />
      <View style={styles.label3}>
        <Text style>Already have an account? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Sign in")}>
          <Text style={styles.teext}>Signin </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clearStorage}>
          <Text style={styles.teext}> clearStorage</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    // </EmailContext.Provider>
  );
};
export const screenOptions = (navData) => {
  return {
    headerTitle: "Get set up",
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
export default RegisterScreen;
// export { EmailContext };

const styles = StyleSheet.create({
  baseText: {
    fontSize: 26,
    fontWeight: "400",
    marginBottom: 10,
  },
  btmText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    paddingRight: 50,
  },
  picker: {
    borderBottomWidth: 1,
    height: 60,
    width: 370,
    color: "black",
    marginLeft: 19,
    fontSize: 18,
    borderWidth: 1,
    padding: 8,
    // backgroundColor: "black",
  },

  label2: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 45,
    marginRight: 20,
    fontSize: 16,
    marginTop: -15,
  },

  label3: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: -10,
    marginTop: -10,
    fontSize: 24,
    // backgroundColor: "red",
  },
  btnContainer: {
    height: 56,
    width: 344,
    backgroundColor: "#00808F",
    marginLeft: 25,
    marginRight: 15,
    borderRadius: 8,
    justifyContent: "center",
    top: 10,
  },
  btnContainer2: {
    height: 56,
    width: 344,
    backgroundColor: "#aaaa",
    marginLeft: 25,
    marginRight: 15,
    borderRadius: 8,
    justifyContent: "center",
    top: 10,
  },
  tellUsbtntxt: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },

  label: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 21,
    marginRight: 10,
    fontSize: 24,
    marginTop: 10,
    // backgroundColor: "red",
  },
  teext: {
    fontSize: 16,
    color: "#00808f",
    fontWeight: "900",
  },
});

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Platform,
//   Dimensions,
//   ScrollView,
// } from "react-native";
// import Input from "../components/Input";
// import Placeholders from "../constants/Placeholders";
// import CheckBox from "@react-native-community/checkbox";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import HeaderButton from "../components/HeaderButton";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import { Picker } from "@react-native-picker/picker";
// import Colors from "../constants/Colors";
// import ButtonComponent from "../components/ButtonComponent";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const WindowHeight = Dimensions.get("window").height;
// const WindowWidth = Dimensions.get("window").width;
// const RegisterScreen = (props) => {
//   const [toggleCheckBox, setToggleCheckBox] = useState(false);
//   const [selectedValue, setSelectedValue] = useState("");
//   const [email, setEmail] = useState();

//   return (
//     <ScrollView>
//       <View style={styles.textContainer}>
//         <Text style={styles.baseText}>Let’s make it personal.</Text>
//         <Text style={styles.btmText}>
//           Just share a few details, and we’ll get you started.
//         </Text>
//       </View>

//       <Input name={Placeholders.email} type="emailAddress" />
//       <Input name={Placeholders.Fname} type="middleName" />
//       <Input name={Placeholders.Sname} type="familyName" />

//       <Picker
//         selectedValue={selectedValue}
//         style={styles.picker}
//         onValueChange={(itemValue) => setSelectedValue(itemValue)}
//       >
//         <Item label="Job role" value="Job role" />
//         <Item label="Associate" value="Associate" />
//         <Item label="Executive" value="Executive" />
//         <Item label="Manager" value="Manager" />
//         <Item label="Senior Manager" value="Senior Manager" />
//         <Item label="Director" value="Director" />
//         <Item label="Founder" value="Founder" />
//       </Picker>
//       <View style={styles.label}>
//         <CheckBox
//           disabled={false}
//           value={toggleCheckBox}
//           onValueChange={setToggleCheckBox}
//           tintColors={{ true: Colors.tint, false: "black" }}
//         />
//         <Text>I'm happy with the</Text>
//         <TouchableOpacity onPress={() => props.navigation.navigate("Terms")}>
//           <Text style={styles.teext}> Terms and Conditions </Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.label2}>
//         <Text> and </Text>
//         <TouchableOpacity onPress={() => props.navigation.navigate("Privacy")}>
//           <Text style={styles.teext}> Privacy Policy </Text>
//         </TouchableOpacity>
//       </View>
//       <ButtonComponent
//         name="Continue"
//         onPress={() => {
//           toggleCheckBox ? props.navigation.navigate("SendEmail") : null;
//         }}
//         buttonStyle={{
//           backgroundColor: toggleCheckBox ? Colors.accent : "#ccc",
//         }}
//         textStyle={{ color: toggleCheckBox ? "white" : "black" }}
//       />
//       <View style={styles.label3}>
//         <Text style>Already have an account? </Text>
//         <TouchableOpacity onPress={() => props.navigation.navigate("Sign in")}>
//           <Text style={styles.teext}>Signin</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };
// export const screenOptions = (navData) => {
//   return {
//     headerTitle: "Get set up",
//     headerRight: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Help"
//           IconComponent={Ionicons}
//           iconName={Platform.OS === "android" ? "md-help" : "ios-help"}
//           onPress={() => {
//             navData.navigation.navigate("NeedHelp");
//           }}
//         />
//       </HeaderButtons>
//     ),
//   };
// };
// export default RegisterScreen;

// const styles = StyleSheet.create({
//   baseText: {
//     fontSize: 26,
//     fontWeight: "400",
//     marginBottom: 10,
//   },
//   btmText: {
//     fontSize: 16,
//     fontWeight: "400",
//     lineHeight: 24,
//   },
//   textContainer: {
//     marginHorizontal: 20,
//     marginTop: 10,
//     paddingRight: 50,
//   },
//   picker: {
//     borderBottomWidth: 1,
//     height: 60,
//     width: 370,
//     color: "black",
//     marginLeft: 19,
//     fontSize: 18,
//     borderWidth: 1,
//     padding: 8,
//   },

//   label2: {
//     margin: 8,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     marginLeft: 45,
//     marginRight: 20,
//     fontSize: 16,
//     marginTop: -15,
//   },

//   label3: {
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     marginLeft: -10,
//     marginTop: 20,
//     fontSize: 24,
//   },
//   btnContainer: {
//     height: 56,
//     width: 344,
//     backgroundColor: "#00808F",
//     marginLeft: 25,
//     marginRight: 15,
//     borderRadius: 8,
//     justifyContent: "center",
//     top: 10,
//   },
//   btnContainer2: {
//     height: 56,
//     width: 344,
//     backgroundColor: "#aaaa",
//     marginLeft: 25,
//     marginRight: 15,
//     borderRadius: 8,
//     justifyContent: "center",
//     top: 10,
//   },
//   tellUsbtntxt: {
//     textAlign: "center",
//     fontSize: 18,
//     color: "#FFFFFF",
//   },

//   label: {
//     margin: 8,
//     flexDirection: "row",
//     alignItems: "center",
//     marginLeft: 21,
//     marginRight: 10,
//     fontSize: 24,
//     marginTop: 20,
//   },
//   teext: {
//     fontSize: 16,
//     color: "#00808f",
//     fontWeight: "900",
//   },
// });
