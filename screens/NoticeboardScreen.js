import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import Card from "../components/Card";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Octicons from "react-native-vector-icons/Octicons";
import DataWestEnd from "../assets/DataWestEnd";
import ButtonComponent from "../components/ButtonComponent";
import Colors from "../constants/Colors";
import firestore from "@react-native-firebase/firestore";

const NoticeboardScreen = (props) => {
  const [featuredTab, setFeaturedTab] = useState(true);
  const [myVillageTab, setMyVillageTab] = useState(false);
  const [particular, setParticular] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isUnmounted = false;

    const FetchUser = async () => {
      try {
        const list = [];
        await firestore()
          .collection("noticeboard")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const { title, url, offer } = doc.data();
              list.push({
                title,
                url,
                offer,
              });
            });
          });

        if (!isUnmounted) {
          setParticular(list);
          setIsLoading(false);
          console.log("after fetching");
        }
      } catch (err) {
        console.log(err);
      }
    };
    FetchUser();
    return () => {
      isUnmounted = true;
    };
  }, []);

  return isLoading ? (
    <View style={styles.ActivityIndicator}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  ) : (
    <View style={styles.rootContainer1}>
      <FlatList
        ListHeaderComponent={
          <View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                Stay up to speed. Get all the news about happenings in your
                building and village.
              </Text>
            </View>

            <View style={styles.borderDivider} />
            <View style={styles.exploreContainer}>
              <Text style={styles.exploreTxt}>Latest</Text>
            </View>
          </View>
        }
        data={particular}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            img={item.url}
            title={item.title}
            description={item.offer}
            isPressed={() => {
              props.navigation.navigate("WestEndDetailedScreen", item);
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
    height: 60,
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
    // marginBottom: 1,
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
export default NoticeboardScreen;
export const screenOptions = (navData) => {
  return {
    headerTitle: "West End",
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
