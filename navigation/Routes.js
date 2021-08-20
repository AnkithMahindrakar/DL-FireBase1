import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { AuthStack } from "./AuthStack";
import { AppNavigator } from "./AppNavigator";
import { AuthContext } from "./AuthProvider";

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInilitializing] = useState(true);
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInilitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Routes;

// import React, { useContext, useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import auth from "@react-native-firebase/auth";
// import AuthStack from "./AuthStack";
// import AppNavigator from "./AppNavigator";
// import { AuthContext } from "./AuthProvider";

// export const Routes = () => {
//   const { user, setUser } = useContext(AuthContext);
//   const [initializing, setInilitializing] = useState(true);
//   const onAuthStateChanged = (user) => {
//     setUser(user);
//     if (initializing) setInilitializing(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);

//   if (initializing) {
//     return null;
//   } else {
//     return (
//       <NavigationContainer>
//         {user ? <AuthStack /> : <AppNavigator />}
//       </NavigationContainer>
//     );
//   }
// };

// import "react-native-gesture-handler";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { AppNavigator } from "./AppNavigator";
// import { AuthStack } from "./AuthStack";
// const Routes = (props) => {
//   return (
//     <NavigationContainer>
//       <AuthStack />
//     </NavigationContainer>
//   );
// };

// export default Routes;

/* eslint-disable react-hooks/exhaustive-deps */
