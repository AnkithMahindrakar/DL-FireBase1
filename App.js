import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Colors from "./constants/Colors";
import Routes from "./navigation/Routes";
import { AuthProvider } from "./navigation/AuthProvider";
// import dynamicLinks from "@react-native-firebase/dynamic-links";

const App = (props) => {
  // const handleDynamicLink = (link) => {
  //   // Alert.alert("Foreground....", "You open the link while in Foreground");
  //   return props.navigation.navigate("EventScreen");
  //   // props.navigation.navigate("EventScreen");
  // };

  // useEffect(() => {
  //   /////////below is background code////////
  //   dynamicLinks()
  //     .getInitialLink()
  //     .then((link) => {
  //       // Alert.alert("Background....", "You open the link while in Background");
  //       return props.navigation.navigate("EventScreen");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  //   ////////////////^^^^^^^/////////////////
  //   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
  //   return () => unsubscribe();
  // }, []);
  // // useEffect(() => {
  // //   dynamicLinks()
  // //     .getInitialLink()
  // //     .then((link) => {
  // //       Alert("background", "You open the link");
  // //     })
  // //     .catch((e) => {
  // //       console.log(e);
  // //     });
  // // }, []);
  return (
    <AuthProvider>
      <View style={styles.screen}>
        <Routes />
      </View>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});
export default App;
