import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen";
import SigninScreen, {
  screenOptions as SignInScreenOptions,
} from "../screens/SigninScreen";
import Colors from "../constants/Colors";
import NeedHelpScreen, {
  screenOptions as NeedHelpScreenOptions,
} from "../screens/NeedHelpScreen";
import RegisterScreen, {
  screenOptions as RegisterScreenOptions,
} from "../screens/RegisterScreen";
import OfferScreen, {
  screenOptions as OfferScreenOptions,
} from "../screens/OfferScreen";
import ForgetPasswordEmailVerification from "../screens/ForgetPasswordEmailVerification";
import ForgetPasswordEmailVerification2 from "../screens/ForgotPasswordEmailVerification2";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import MyVillageScreen from "../screens/MyVillageScreen";
import SendEmail from "../screens/SendEmail";
import ResendEmail from "../screens/ResendEmail";
import Verification from "../screens/Verification";
import Password from "../screens/Password";
import DescriptionDetailsScreen from "../screens/DescriptionDetailsScreen";
import EventScreen from "../screens/EventScreen";
import EventDetailCard from "../screens/EventDetailCard";
import BookingConfirmationScreen from "../screens/BookingConfirmationScreen";
import AvailableScreen from "../screens/AvailableScreen";
import WestEndScreen from "../screens/WestEndScreen";
import WestEndDetailedScreen from "../screens/WestEndDetailedScreen";
import IntroVideo from "../screens/IntroVideo";
import NoticeboardScreen from "../screens/NoticeboardScreen";
import DiscoverScreen from "../screens/DiscoverScreen";

import TabNavigator from "./TabNavigator";
const MyStack = createStackNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Colors.secondary,
  },
  headerShown: true,
};
const IntroScreenOptions = {
  headerShown: false,
};
const DiscoverScreenOptions = {
  headerShown: false,
};
const IntroVideoOptions = {
  headerShown: false,
};
const EventScreenOptions = {
  headerShown: false,
};
const DescriptionDetailsScreenOptions = {
  headerShown: true,
  headerbackTitleVisible: true,
  headerTitle: true,
  headerTransparent: true,
  headerTintColor: "white",
};
const EventDetailsScreenOptions = {
  headerShown: true,
  headerbackTitleVisible: true,
  headerTitle: true,
  headerTransparent: true,
  headerTintColor: "white",
};
const NoticeboardScreenOptions = {
  title: "Notice Board",
  headerTitleAlign: "center",
};
const WestEndScreenOptions = {
  title: "Office Spaces",
  headerTitleAlign: "center",
};

export const AppNavigator = () => {
  return (
    <MyStack.Navigator screenOptions={defaultScreenOptions}>
      <MyStack.Screen
        name="IntroVideo"
        component={IntroVideo}
        options={IntroVideoOptions}
      />

      <MyStack.Screen
        name="NeedHelp"
        component={NeedHelpScreen}
        options={NeedHelpScreenOptions}
      />

      <MyStack.Screen
        name="MyVillageScreen"
        component={MyVillageScreen}
        // options={NeedHelpScreenOptions}
      />
      <MyStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        // options={NeedHelpScreenOptions}
      />

      <MyStack.Screen
        name="DescriptionDetailsScreen"
        component={DescriptionDetailsScreen}
        options={DescriptionDetailsScreenOptions}
      />
      <MyStack.Screen
        name="Offer"
        component={OfferScreen}
        options={OfferScreenOptions}
      />
      <MyStack.Screen
        name="BookingConfirmationScreen"
        component={BookingConfirmationScreen}
        options={OfferScreenOptions}
      />
      <MyStack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerLeft: () => {},
          title: "DL/",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <MyStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={EventScreenOptions}
      />
      <MyStack.Screen
        name="EventDetailCard"
        component={EventDetailCard}
        options={EventDetailsScreenOptions}
      />
      <MyStack.Screen
        name="AvailableScreen"
        component={AvailableScreen}
        // options={OfferScreenOptions}
      />
      <MyStack.Screen
        name="NoticeboardScreen"
        component={NoticeboardScreen}
        options={NoticeboardScreenOptions}
      />
      <MyStack.Screen
        name="WestEndScreen"
        component={WestEndScreen}
        options={WestEndScreenOptions}
      />
      <MyStack.Screen
        name="WestEndDetailedScreen"
        component={WestEndDetailedScreen}
        // options={OfferScreenOptions}
      />
      <MyStack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={DiscoverScreenOptions}
      />
    </MyStack.Navigator>
  );
};
