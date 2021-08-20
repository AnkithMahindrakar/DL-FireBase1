import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

const BookingConfirmationScreen = ({ route }) => {
  //   const { title, description, img } = route.params;
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.tickmarkContainer}>
          <Image
            style={styles.tickImage}
            source={require("../assets/tick.png")}
          />
          <Text style={styles.youreTxt}>You're all booked Enjoy</Text>
        </View>
        <View style={styles.border} />
        <View style={styles.fitroviaContainer}>
          <Text style={styles.fitroviaTxt}>
            Fitrovia Networking Drinks Hosted by{" "}
            <Text style={{ color: "#00808F" }}>Derwent London</Text>
          </Text>
        </View>
        <View style={styles.thisisContainer}>
          <Text style={styles.thisisTxt}>This is your Event</Text>
        </View>
        <View style={styles.michaelContainer}>
          <Text style={styles.michaelTxt}>Michael de Lange</Text>
          <Text style={styles.michaelTxt}>4 x eTickets</Text>
          <Text style={styles.michaelTxt}>Order total: Free</Text>
          <Text style={styles.michaelTxt}>
            Wed, 2nd Dec 2020, 17:00 - 19:00
          </Text>
          <Text style={styles.michaelTxt}>76 Charlotte Street, W1T 1RR</Text>
          <Text style={styles.myBookingTxt}>
            Please see ‘My Bookings’ for full event details, how to redeem
            tickets.
          </Text>
        </View>
        <ButtonComponent
          name="Add the tickets to my wallet"
          buttonStyle={styles.btn1}
          textStyle={styles.btn1Txt}
        />
        <ButtonComponent
          name="Add it to my calendar"
          buttonStyle={styles.btn1}
          textStyle={styles.btn1Txt}
        />
        <ButtonComponent name="Done" buttonStyle={styles.btn2} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    width: 384,
    marginLeft: 14,
  },
  tickImage: {
    marginBottom: 50,
  },
  youreTxt: {
    fontSize: 30,
    color: "#2A2A2A",
  },
  border: {
    height: 2,
    width: 384,
    backgroundColor: "#2A2A2A",
    marginVertical: 10,
    opacity: 0.5,
  },
  tickmarkContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  fitroviaContainer: {
    // marginVertical: 20,
  },
  fitroviaTxt: {
    fontSize: 16,
    lineHeight: 24,
  },
  thisisContainer: {
    height: 40,
    // backgroundColor: "teal",
    justifyContent: "center",
    marginTop: 26,
  },
  thisisTxt: {
    fontSize: 26,
    lineHeight: 26,
  },
  michaelContainer: {},
  michaelTxt: {
    fontSize: 16,
    lineHeight: 24,
  },
  myBookingTxt: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 15,
  },
  btn1: {
    marginVertical: 10,
    width: 384,
    // marginLeft: 5,
    right: 18,
    backgroundColor: "#E5E5E5",
    // color: "black",
    borderWidth: 2,
    borderColor: "#00808F",
  },
  btn1Txt: {
    color: "black",
  },
  btn2: {
    marginVertical: 10,
    width: 384,
    right: 18,
    backgroundColor: "#00808F",
  },
});
export default BookingConfirmationScreen;
