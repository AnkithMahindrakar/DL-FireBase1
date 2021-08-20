import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (err) {
            Alert.alert("Error", "Something went wrong");
          }
        },
        reset: async (email) => {
          try {
            await auth().sendPasswordResetEmail(email);
          } catch (err) {
            // Alert.alert("Error", "Something went wrong");
            Alert.alert(err.code, err.message);
            // throw err;
          }
        },

        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (err) {
            Alert.alert("Error", "Something went wrong");
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (err) {
            Alert.alert("Error", "Something went wrong");
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
