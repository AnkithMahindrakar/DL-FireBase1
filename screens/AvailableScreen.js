import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Card from "../components/Card";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Octicons from "react-native-vector-icons/Octicons";
import DataAvailable from "../assets/DataAvailable";
import ButtonComponent from "../components/ButtonComponent";
import Colors from "../constants/Colors";
const AvailableScreen = (props) => {
  const [featuredTab, setFeaturedTab] = useState(true);
  const [myVillageTab, setMyVillageTab] = useState(false);

  return (
    <>
      <View style={styles.rootContainer1}>
        <FlatList
          ListHeaderComponent={
            <View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  Whether you’re growing or downsizing, we’re here to help.
                </Text>
              </View>
              <ButtonComponent name="See what's available" />
              <View style={styles.borderDivider} />
              <View style={styles.exploreContainer}>
                <Text style={styles.exploreTxt}>Explore our villages</Text>
              </View>
            </View>
          }
          data={DataAvailable}
          renderItem={({ item }) => (
            <Card
              img={item.img}
              title={item.title}
              description={item.description}
              isPressed={() => {
                props.navigation.navigate("WestEndScreen", item);
              }}
            />
          )}
          ListFooterComponent={
            <>
              <View style={styles.tellUsContainer}>
                <View style={styles.tellUsTxtContainer}>
                  <Text style={styles.doYouTxt}>
                    Looking for something else? It’s good to talk
                  </Text>
                </View>
                <ButtonComponent
                  name="Email us"
                  buttonStyle={styles.btnContainer}
                  textStyle={styles.tellUsbtntxt}
                />
              </View>
            </>
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer1: {
    flex: 1,
    backgroundColor: Colors.secondary,
    // alignItems: "center",
    // width: 384,
  },
  txtOffer: {
    fontWeight: "bold",
  },
  headerContainer: {
    height: 40,
    width: 344,
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 6,
  },
  header: {
    fontSize: 36,
    position: "absolute",
    bottom: 4,
    left: 0,
  },
  headerIcon: {
    left: 304,
  },
  tabContainer: {
    height: 60,
    width: 375,
    flexDirection: "row",
    marginBottom: 3,
  },
  txtFeatureContainer: {
    height: 60,
    width: 100,
    borderBottomWidth: 3,
    marginHorizontal: 10,
  },

  txtFeatured: {
    left: 5,
    top: 19,
    fontSize: 20,
  },
  txtMyVillage: {
    left: 5,
    top: 19,
    fontSize: 20,
    color: "black",
  },
  descriptionContainer: {
    height: 50,
    width: 384,
    marginBottom: 10,
    marginLeft: 16,
    marginTop: 20,
    // backgroundColor: "teal",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    // fontWeight: "bold",
  },
  borderDivider: {
    width: 384,
    backgroundColor: "black",
    height: 2,
    marginBottom: 14,
    left: 14,
    opacity: 0.7,
  },
  exploreContainer: {
    height: 50,
    width: 384,
    // backgroundColor: "teal",
    marginLeft: 14,
    justifyContent: "center",
    marginBottom: 10,
  },
  exploreTxt: {
    color: "#2A2A2A",
    fontSize: 26,
  },
  tellUsContainer: {
    height: 528,
    width: 383,
    backgroundColor: "#DADADA",
    marginLeft: 16,
    marginBottom: 16,
    alignItems: "center",
  },

  tellUsTxtContainer: {
    height: 96,
    width: 312,
    top: 145,
    justifyContent: "center",
    alignItems: "center",
  },
  doYouTxt: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
  },
  btnContainer: {
    height: 56,
    width: 312,
    backgroundColor: "#00808F",
    top: 188,
    borderRadius: 8,
    justifyContent: "center",
  },
  tellUsbtntxt: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },
  DiscoverContainer: {
    height: 540,
    width: 415,
    backgroundColor: "#323232",
  },
  ftrimage: {
    left: 16,
    top: 18,
    height: 400,
    width: 384,
    marginBottom: 11,
  },
  fottertitleContainer: {
    width: 384,
    height: 48,
    left: 16,
    top: 18,
  },
  ftrtitles: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  ftrdesc: {
    color: "white",
    fontSize: 16,
  },
  resposiblilityContainer: {
    top: 26,
    left: 18,
    height: 36,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderColor: "white",
    borderWidth: 1,
  },
  txtResposiblility: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});
export default AvailableScreen;
export const screenOptions = (navData) => {
  return {
    headerTitle: "DL / Offers",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Settings"
          IconComponent={Octicons}
          iconName="settings"
          onPress={() => {
            navData.navigation.navigate("NeedHelp");
          }}
        />
      </HeaderButtons>
    ),
  };
};
