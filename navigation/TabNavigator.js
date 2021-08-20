import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import IntroScreen from "../screens/IntroScreen";
import Colors from "../constants/Colors";
import Icons from "react-native-vector-icons/Ionicons";
import NeedHelpScreen from "../screens/NeedHelpScreen";
import OfferScreen from "../screens/OfferScreen";
import EventScreen from "../screens/EventScreen";
import MoreScreen from "../screens/MoreScreen";
import MeetingRoomScreen from "../screens/MeetingRoomScreen";
const TabNavigator = (props) => {
  const Tab = createBottomTabNavigator();
  const tabOptions = {
    activeTintColor: Colors.tint,
    showLabel: false,
    tabStyle: {
      backgroundColor: Colors.primary,
      paddingBottom: 5,
    },
    style: {
      height: 55,
    },
  };
  return (
    <Tab.Navigator lazy={true} tabBarOptions={tabOptions} backBehavior="none">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="home" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="MeetingRoomScreen"
        component={MeetingRoomScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="people-outline" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="analytics" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="App"
        component={EventScreen}
        options={{
          title: "App",
          tabBarIcon: ({ color, size }) => (
            <Icons name="albums" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons
              name="ellipsis-horizontal-outline"
              color={color}
              size={size}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
