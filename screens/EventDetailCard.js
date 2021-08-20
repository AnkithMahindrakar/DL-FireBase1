import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const DescriptionDetailsScreen = ({ route, navigation }) => {
  const { title, description, url } = route.params;
  const [picker, setPicker] = useState(0);
  // console.log(title, description, url);
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        {/* <View style={styles.imageContainer}> */}
        <Image style={styles.image} source={{ uri: url }} />
        {/* </View> */}
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>
            Hosted by <Text style={styles.title2}>Derwent London</Text>
          </Text>
          {/* <Text style={styles.title2}>{title}</Text> */}
        </View>
        <View style={styles.border} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            As one of Derwent London’s members, you’ll get a heads-up on any
            great events happening in your building and local village.
          </Text>
        </View>
        <View style={styles.offerDetailsContainer}>
          <Text style={styles.offerDetails}>Learn a little more</Text>
        </View>
        <View style={styles.thissOfferContainer}>
          <Text style={styles.thissOffer}>
            Our friends at Blacklock, on Redchurch Street in Shoreditch have
            extended a 20% off your bill offer to all Derwent London tenants.
          </Text>
        </View>
        <View style={styles.thissOfferContainer}>
          <Text style={styles.thissOffer}>
            This offer applies at any time of day on any day of the week. To
            redeem this offer just show your Derwent London loyalty card when
            asking for the bill.
          </Text>
        </View>
        <View style={styles.offerDetailsContainer}>
          <Text style={styles.offerDetails}>Bring some buddies</Text>
        </View>
        <View style={styles.thissOfferContainer}>
          <Text style={styles.thissOffer}>
            You can add up to 3 guests for this event (subject to availability).
          </Text>
        </View>
        <View style={styles.border} />
        {/* <View style={styles.pickerContainer}> */}
        <View style={styles.pickerCaintainer1}>
          <Text style={styles.noOfGuestTxt}>Number of guests</Text>
          <Picker
            style={styles.picker}
            selectedValue={picker}
            onValueChange={(itemValue) => setPicker(itemValue)}
          >
            <Picker.Item label="0" value={0} />
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
          </Picker>
        </View>
        {/* </View> */}
        <View style={styles.border} />

        <View style={styles.showMeContainer}>
          <Text style={styles.showMe}>Show me where</Text>
        </View>

        <Image style={styles.mapImage} source={require("../assets/map.png")} />
        <View style={styles.charlotteContainer}>
          <Text style={styles.charlotteTxt}>
            76 Charlotte Street, London, W1T 1RR
          </Text>
        </View>
        <TouchableOpacity style={styles.takeMeBtnContainer}>
          <Text style={styles.takeMe}>Take me there</Text>
        </TouchableOpacity>

        <View style={styles.border} />
        <TouchableOpacity
          style={styles.grabBtnContainer}
          onPress={() => {
            navigation.navigate("BookingConfirmationScreen");
          }}
        >
          <Text style={styles.grabTxt}>Book it</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  // imageContainer: {
  //   width: "100%",
  // },
  image: {
    width: "100%",
    height: 412,
  },
  titleContainer: {
    height: 54,
    width: 384,
    marginTop: 10,
    justifyContent: "center",
    // backgroundColor: "#2A2A2A",
  },
  title1: {
    fontSize: 18,
    color: "#2A2A2A",

    // marginVertical: 5,
  },
  title2: {
    fontSize: 18,
    color: "#00808F",
    // marginTop: 20,
    fontWeight: "bold",
  },
  border: {
    height: 2,
    width: 384,
    backgroundColor: "#2A2A2A",
    marginTop: 5,
    opacity: 0.5,
  },
  descriptionContainer: {
    height: 72,
    width: 383,
    marginBottom: 25,
    // paddingLeft: 5,
    // marginLeft: 16,
    marginVertical: 30,
    // backgroundColor: "teal",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
  },
  offerDetailsContainer: {
    height: 32,
    width: 384,
    // marginTop: 0,
  },
  offerDetails: {
    fontSize: 26,
  },
  ourFriendContainer: {
    height: 86,
    width: 384,
    marginTop: 7,
  },
  ourFriend: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
  },
  thissOfferContainer: {
    // height: 86,
    width: 384,
    // backgroundColor: "teal",
    marginTop: 10,
  },
  thissOffer: {
    fontSize: 16,
    lineHeight: 24,
  },
  picker: {
    width: 73,
    height: 50,
    color: "teal",
    fontSize: 30,
    fontWeight: "bold",
  },
  pickerCaintainer1: {
    width: 380,
    flexDirection: "row",
    // backgroundColor: "teal",
    justifyContent: "space-between",
    alignItems: "center",
  },
  noOfGuestTxt: {
    fontSize: 17,
  },
  // picker1: {
  //   width: 330,
  //   height: 30,
  //   color: "teal",
  //   // fontSize: 30,
  //   fontWeight: "bold",
  // },
  // pickerContainer: {
  //   // backgroundColor: "teal",
  //   marginLeft: 0,
  //   width: 40,
  //   height: 50,
  //   borderColor: "black",
  //   borderWidth: 0.5,
  //   borderRadius: 5,
  //   elevation: 4,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  showMeContainer: {
    height: 32,
    width: 384,
    marginTop: 30,
    // backgroundColor: "teal",
  },
  showMe: {
    fontSize: 26,
    color: "black",
  },
  mapImage: {
    height: 200,
    width: 384,
    marginTop: 10,
  },
  charlotteContainer: {
    height: 24,
    width: 384,
    marginTop: 10,
  },
  charlotteTxt: {
    fontSize: 16,
    color: "#2A2A2A",
    textAlign: "left",
  },
  takeMeBtnContainer: {
    width: 384,
    height: 56,
    borderRadius: 8,
    borderColor: "#00808F",
    borderWidth: 2,
    marginTop: 17,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  takeMe: {
    fontSize: 18,
  },
  theSmallContainer: {
    height: 32,
    width: 384,
    marginTop: 36,
  },
  theSmallTxt: {
    color: "#2A2A2A",
    fontSize: 26,
  },
  LoremTxtContainer: {
    marginTop: 8,
    height: 80,
    width: 384,
  },
  LoremTxt: {
    color: "#2A2A2A",
    fontSize: 16,
    lineHeight: 24,
  },
  border2: {
    height: 2,
    width: 414,
    backgroundColor: "#2A2A2A",
    marginTop: 20,
    opacity: 0.5,
  },
  grabBtnContainer: {
    width: 384,
    height: 56,
    backgroundColor: "teal",
    borderRadius: 8,

    marginTop: 17,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  grabTxt: {
    fontSize: 18,
    color: "white",
  },
});

export default DescriptionDetailsScreen;
