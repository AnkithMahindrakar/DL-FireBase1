import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const DescriptionDetailsScreen = ({ route }) => {
  const { title, offer, url } = route.params;
  // console.log(title, description, img);
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        {/* <View style={styles.imageContainer}> */}
        <Image style={styles.image} source={{ uri: url }} />
        {/* </View> */}
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>{title}</Text>
          <Text style={styles.title2}>{offer}</Text>
        </View>
        <View style={styles.border} />
        <View style={styles.offerDetailsContainer}>
          <Text style={styles.offerDetails}>Offer details</Text>
        </View>
        <View style={styles.ourFriendContainer}>
          <Text style={styles.ourFriend}>
            Our friends at , on Redchurch Street in Shoreditch have extended a
            20% off your bill offer to all Derwent London tenants.
          </Text>
        </View>
        <View style={styles.thissOfferContainer}>
          <Text style={styles.thissOffer}>
            This offer applies at any time of day on any day of the week. To
            redeem this offer just show your Derwent London loyalty card when
            asking for the bill.
          </Text>
        </View>
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
        <View style={styles.theSmallContainer}>
          <Text style={styles.theSmallTxt}>The small print</Text>
        </View>
        <View style={styles.LoremTxtContainer}>
          <Text style={styles.LoremTxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </View>
        <View style={styles.border2} />
        <TouchableOpacity style={styles.grabBtnContainer}>
          <Text style={styles.grabTxt}>Grab That Offer</Text>
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
    height: 34,
    width: 384,
    marginTop: 10,
  },
  title1: {
    fontSize: 22,
    color: "#656565",
    fontWeight: "bold",
    // marginVertical: 5,
  },
  title2: {
    fontSize: 18,
    color: "#656565",
    marginVertical: 5,
  },
  border: {
    height: 2,
    width: 384,
    backgroundColor: "#2A2A2A",
    marginTop: 40,
    opacity: 0.5,
  },
  offerDetailsContainer: {
    height: 32,
    width: 384,
    marginTop: 34,
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
    height: 86,
    width: 384,

    marginTop: 20,
  },
  thissOffer: {
    fontSize: 16,
    lineHeight: 24,
  },
  showMeContainer: {
    height: 32,
    width: 384,
    marginTop: 30,
  },
  showMe: {
    fontSize: 26,
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
