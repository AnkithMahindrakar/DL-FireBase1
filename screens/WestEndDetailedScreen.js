import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
// import Slider from "../assets/Slider";

const WestEndDetailedScreen = ({ route, navigation }) => {
  const { url, offer, title } = route.params;
  const [building, setBuilding] = useState(true);
  const [gf, setGf] = useState(false);
  const [second, setSecond] = useState(false);
  const [forth, setForth] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image style={styles.xyz} source={{ uri: url }} />
      <View style={styles.rootContainer}>
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => {
              setBuilding(true);
              setGf(false);
              setSecond(false);
              setForth(false);
            }}
            style={{
              ...styles.eachTabContainer,
              ...{ borderBottomColor: building ? "#E03C00" : "#E5E5E5" },
            }}
          >
            <Text
              style={{
                ...styles.tabTxt,
                ...{ color: building ? "#2A2A2A" : "#00808F" },
              }}
            >
              Building
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBuilding(false);
              setGf(true);
              setSecond(false);
              setForth(false);
            }}
            style={{
              ...styles.eachTabContainer,
              ...{ borderBottomColor: gf ? "#E03C00" : "#E5E5E5" },
            }}
          >
            <Text
              style={{
                ...styles.tabTxt,
                ...{ color: gf ? "#2A2A2A" : "#00808F" },
              }}
            >
              Ground floor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBuilding(false);
              setGf(false);
              setSecond(true);
              setForth(false);
            }}
            style={{
              ...styles.eachTabContainer,
              ...{ borderBottomColor: second ? "#E03C00" : "#E5E5E5" },
            }}
          >
            <Text
              style={{
                ...styles.tabTxt,
                ...{ color: second ? "#2A2A2A" : "#00808F" },
              }}
            >
              2nd floor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBuilding(false);
              setGf(false);
              setSecond(false);
              setForth(true);
            }}
            style={{
              ...styles.eachTabContainer,
              ...{ borderBottomColor: forth ? "#E03C00" : "#E5E5E5" },
            }}
          >
            <Text
              style={{
                ...styles.tabTxt,
                ...{ color: forth ? "#2A2A2A" : "#00808F" },
              }}
            >
              4th floor
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DescContainer}>
          <Text style={styles.btmTxt}>
            Hardwick Street, a 12,000 sq ft former Victorian warehouse stripped
            back to its original industrial integrity and revealing a wealth of
            features, makes this building a unique and desirable working
            environment for any aspiring business.
          </Text>
          <Text style={styles.blwTxt}>
            1,000 - 3,000 sq ft {"\n"}4 units available on the above floors
          </Text>
          <View style={styles.border} />
          <View style={styles.buildingTxtContainer}>
            <Text style={styles.buildingTxt}>Building highlights</Text>
          </View>
        </View>
        <View style={styles.public1}>
          <View style={styles.public}>
            <Image source={require("../assets/gym.png")} />
            <Text style={styles.bulletTxt}>Gym</Text>
          </View>
          <View style={styles.public}>
            <Image source={require("../assets/cycle.png")} />
            <Text style={styles.bulletTxt}>Cycle racks</Text>
          </View>
          <View style={styles.public}>
            <Image source={require("../assets/shower.png")} />
            <Text style={styles.bulletTxt}>Shower facilities</Text>
          </View>
          <View style={styles.public}>
            <Image source={require("../assets/roof.png")} />
            <Text style={styles.bulletTxt}>Roof Terrace</Text>
          </View>
          <View style={styles.public}>
            <Image source={require("../assets/cafe.png")} />
            <Text style={styles.bulletTxt}>Cafe</Text>
          </View>
        </View>
        <View style={styles.showMeContainer}>
          <Text style={styles.showMe}>Show me where</Text>
        </View>

        <Image style={styles.mapImage} source={{ uri: url }} />
        <View style={styles.charlotteContainer}>
          <Text style={styles.charlotteTxt}>
            A walking tour of 4 Hardwick Street
          </Text>
        </View>
        <View style={styles.showMeContainer}>
          <Text style={styles.showMe}>Where to find it?</Text>
        </View>
        <Image style={styles.mapImage} source={require("../assets/map.png")} />
        <View style={styles.charlotteContainer}>
          <Text style={styles.charlotteTxt}>
            90 Whitfield Street, London, W1T 1RR
          </Text>
        </View>

        <ButtonComponent
          buttonStyle={styles.getBtn}
          textStyle={styles.btntxt}
          name="Get direction"
        />
        <View style={styles.stationContainer}>
          <Text style={styles.stationTxt}>Stations nearby</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.stationContainer1}>
            <View style={styles.btn1}>
              <View style={styles.topHalfContainer}>
                <View style={styles.googleConatainer}>
                  <Text style={styles.googleTxt}>Goodge Street</Text>
                  <Text style={styles.miTxt}>0.1 mi</Text>
                </View>
                <Image
                  style={styles.cp}
                  source={require("../assets/stationBoard.png")}
                />
              </View>
              <View style={styles.border} />
              <View style={styles.bothBtnConatainer}>
                <TouchableOpacity style={styles.btnContainer1}>
                  <Text style={styles.tellUsbtntxt1}>Northern</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer2}>
                  <Text style={styles.tellUsbtntxt1}>Victoria</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.btn1}>
              <View style={styles.topHalfContainer}>
                <View style={styles.googleConatainer}>
                  <Text style={styles.googleTxt}>Warren Street Station</Text>
                  <Text style={styles.miTxt}>0.1 mi</Text>
                </View>
                <Image
                  style={styles.cp}
                  source={require("../assets/stationBoard.png")}
                />
              </View>
              <View style={styles.border} />
              <View style={styles.bothBtnConatainer}>
                <TouchableOpacity style={styles.btnContainer1}>
                  <Text style={styles.tellUsbtntxt1}>Northern</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer2}>
                  <Text style={styles.tellUsbtntxt1}>Victoria</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.btn1}>
              <View style={styles.topHalfContainer}>
                <View style={styles.googleConatainer}>
                  <Text style={styles.googleTxt}>Goodge Street</Text>
                  <Text style={styles.miTxt}>0.1 mi</Text>
                </View>
                <Image
                  style={styles.cp}
                  source={require("../assets/stationBoard.png")}
                />
              </View>
              <View style={styles.border} />
              <View style={styles.bothBtnConatainer}>
                <TouchableOpacity style={styles.btnContainer1}>
                  <Text style={styles.tellUsbtntxt1}>Northern</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer2}>
                  <Text style={styles.tellUsbtntxt1}>Victoria</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.btn1}>
              <View style={styles.topHalfContainer}>
                <View style={styles.googleConatainer}>
                  <Text style={styles.googleTxt}>Goodge Street</Text>
                  <Text style={styles.miTxt}>0.1 mi</Text>
                </View>
                <Image
                  style={styles.cp}
                  source={require("../assets/stationBoard.png")}
                />
              </View>
              <View style={styles.border} />
              <View style={styles.bothBtnConatainer}>
                <TouchableOpacity style={styles.btnContainer1}>
                  <Text style={styles.tellUsbtntxt1}>Northern</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer2}>
                  <Text style={styles.tellUsbtntxt1}>Victoria</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.stationContainer}>
          <Text style={styles.stationTxt}>Full Details</Text>
        </View>
        <ButtonComponent
          activeOpacity={0.5}
          buttonStyle={styles.getBtn}
          textStyle={styles.btntxt}
          name="I'd love the brochure"
        />

        <ButtonComponent
          activeOpacity={0.9}
          buttonStyle={styles.interstedBtn}
          name="I’m interested. Let’s talk."
        />
      </View>
    </ScrollView>
  );
};

export default WestEndDetailedScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    // marginLeft: 14,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "teal",
    height: 60,
    width: "94%",
    alignItems: "center",
  },
  eachTabContainer: {
    height: 50,
    // width: "110%",
    borderWidth: 2,
    borderColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  tabTxt: {
    fontSize: 18,
    color: "#00808F",
    // padding: 0,
  },
  DescContainer: {
    width: "94%",
  },
  btmTxt: {
    marginRight: 15,
    fontSize: 16,
    marginTop: 10,
    color: "#2A2A2A",
    lineHeight: 24,
  },
  blwTxt: {
    fontSize: 16,
    color: "#2A2A2A",
    lineHeight: 24,
    // marginTop: 14,
  },
  border: {
    height: 2,
    width: "100%",
    backgroundColor: "#2A2A2A",
    marginTop: 16,
    opacity: 0.5,
  },

  buildingTxtContainer: {
    justifyContent: "center",
    // backgroundColor: "teal",
    height: 40,
    marginTop: 14,
  },
  buildingTxt: {
    fontSize: 26,
  },
  bulletTxt: {
    marginLeft: 10,
    fontSize: 16,
  },
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
  getBtn: {
    width: "94%",
    backgroundColor: "#E5E5E5",
    borderWidth: 2,
    borderColor: "#00808F",
  },
  btntxt: {
    color: "#2A2A2A",
  },
  btn: {
    marginTop: 10,
    marginLeft: 16,
    height: 50,
    width: 364,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#00808F",
    borderWidth: 1,
  },
  stationContainer: {
    // backgroundColor: "teal",
    position: "relative",
    justifyContent: "center",
    width: "94%",
  },
  stationTxt: {
    fontSize: 26,
    color: "#2A2A2A",
  },
  stationContainer1: {
    flexDirection: "row",

    flex: 1,

    marginLeft: 14,
    marginTop: 8,
    marginBottom: 20,
  },
  btn1: {
    // marginTop: 20,
    // marginLeft: 16,
    marginRight: 10,
    height: 120,
    width: 240,
    justifyContent: "center",
    // alignItems: "center",
    borderRadius: 8,
    borderColor: "#00808F",
    borderWidth: 2,
  },
  topHalfContainer: {
    // backgroundColor: "blue",
    flexDirection: "row",
  },
  googleConatainer: {
    // backgroundColor: "teal",
    height: 50,
    width: "80%",
    marginLeft: 10,
  },
  googleTxt: {
    fontSize: 16,
    marginBottom: 10,
  },
  bothBtnConatainer: {
    // backgroundColor: "green",
    width: "60%",
    flexDirection: "row",
    // justifyContent: "space-around",
    // height: 30,
    // flex: 1,
    marginTop: 10,
    paddingLeft: 6,
  },
  btnContainer1: {
    height: 20,
    width: 74,
    backgroundColor: "black",
    // marginLeft: -95,
    marginRight: 15,
    justifyContent: "center",
    // top: 15,
    borderRadius: 4,
  },
  Txt: {
    marginLeft: 16,
    marginRight: 15,
    fontSize: 16,
    marginTop: 0,
    color: "#2A2A2A",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer2: {
    height: 20,
    width: 74,
    backgroundColor: "#0F7DD0",

    borderRadius: 4,
    // marginRight: 15,
    justifyContent: "center",
    // top: -5,
  },
  Txt: {
    marginLeft: 16,
    marginRight: 15,
    fontSize: 16,
    marginTop: 0,
    color: "#2A2A2A",
    alignItems: "center",
    justifyContent: "center",
  },
  cp: {
    marginLeft: 10,
    marginTop: 18,
  },
  tellUsbtntxt1: {
    textAlign: "center",
    fontSize: 12,
    color: "#FFFFFF",
  },
  interstedBtn: {
    width: "94%",
    marginTop: 0,
  },
  public1: {
    // backgroundColor: "orange",
    width: "94%",
  },
  public: {
    marginTop: 10,
    // width: "94%",
    // marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "teal",
  },
  xyz: {
    width: "100%",
    height: 412,
  },
});
export const screenOptions = (navData) => {
  return {
    headerTitle: "The Board Room",
    headerTitleAlign: "center",

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="share"
          IconComponent={Ionicons}
          iconName={
            Platform.OS === "android" ? "md-share-outline" : "ios-share-outline"
          }
          onPress={() => {
            navData.navigation.navigate("ShareExample");
          }}
        />
      </HeaderButtons>
    ),
  };
};
