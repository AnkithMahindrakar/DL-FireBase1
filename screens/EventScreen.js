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
import DataEvent from "../assets/DataEvent";
import ButtonComponent from "../components/ButtonComponent";
import Colors from "../constants/Colors";
import firestore from "@react-native-firebase/firestore";

const OfferScreen = (props) => {
  const [upcoming, setUpcomingTab] = useState(true);
  const [past, setPast] = useState(false);
  const [myBooking, setmyBooking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [particular, setParticular] = useState();

  useEffect(() => {
    let isUnmounted = false;

    const FetchUser = async () => {
      try {
        const list = [];
        await firestore()
          .collection("events")
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

  return (
    <>
      <View style={styles.rootContainer}>
        {/* <View style={styles.rootContainer1}> */}
        <View style={styles.container}>
          <Text style={styles.headerFont}>DL/Event</Text>
        </View>
        <View style={styles.border1} />
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => {
              setUpcomingTab(true);
              setPast(false);
              setmyBooking(false);
            }}
            style={{
              ...styles.txtFeatureContainer,
              ...{
                borderBottomColor: upcoming ? "orange" : Colors.secondary,
              },
            }}
          >
            <Text
              style={{
                ...styles.txtFeatured,
                ...{ color: upcoming ? "black" : "#00808F" },
              }}
            >
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.txtFeatureContainer,
              ...{
                borderBottomColor: past ? "orange" : Colors.secondary,
              },
            }}
            onPress={() => {
              setUpcomingTab(false);
              setPast(true);
              setmyBooking(false);
            }}
          >
            <Text
              style={{
                ...styles.txtMyVillage,
                ...{
                  color: past ? "black" : "#00808F",
                },
              }}
            >
              Past
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUpcomingTab(false);
              setPast(false);
              setmyBooking(true);
            }}
            style={{
              ...styles.txtFeatureContainer,
              ...{
                borderBottomColor: myBooking ? "orange" : Colors.secondary,
              },
            }}
          >
            <Text
              style={{
                ...styles.txtFeatured,
                ...{ color: myBooking ? "black" : "#00808F" },
              }}
            >
              My Bookings
            </Text>
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <View style={styles.ActivityIndicator}>
            <ActivityIndicator size="large" color="grey" />
          </View>
        ) : (
          <View style={styles.xyz}>
            {upcoming && (
              <FlatList
                ListHeaderComponent={
                  <>
                    <View style={styles.descriptionContainer}>
                      <Text style={styles.description}>
                        As one of Derwent London’s members, you’ll get a
                        heads-up on any great events happening in your building
                        and local village.
                      </Text>
                    </View>
                  </>
                }
                data={particular}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Card
                    img={item.url}
                    title={item.title}
                    description={item.offer}
                    isPressed={() => {
                      props.navigation.navigate("EventDetailCard", item);
                    }}
                  />
                )}
                ListFooterComponent={
                  <>
                    <View style={styles.tellUsContainer}>
                      <View style={styles.tellUsTxtContainer}>
                        <Text style={styles.doYouTxt}>
                          Do you have an offer to share with the Derwent London
                          family?
                        </Text>
                      </View>
                      <ButtonComponent
                        name="Tell us about it"
                        buttonStyle={styles.btnContainer}
                        textStyle={styles.tellUsbtntxt}
                      />
                    </View>
                    <TouchableOpacity>
                      <View style={styles.DiscoverContainer}>
                        <Image
                          style={styles.ftrimage}
                          source={require("../assets/4.png")}
                        />
                        <View style={styles.fottertitleContainer}>
                          <Text style={styles.ftrtitles}>
                            Building a better future
                          </Text>
                          <Text style={styles.ftrdesc}>
                            Our first net-zero building launches...
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.resposiblilityContainer}
                        >
                          <Text style={styles.txtResposiblility}>
                            Resposiblility
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </>
                }
              />
            )}
            {past && (
              <FlatList
                data={particular}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Card
                    img={item.url}
                    title={item.title}
                    description={item.offer}
                    isPressed={() => {
                      props.navigation.navigate("EventDetailCard", item);
                    }}
                  />
                )}
              />
            )}
            {myBooking && (
              <FlatList
                data={particular}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Card
                    img={item.url}
                    title={item.title}
                    description={item.offer}
                    isPressed={() => {
                      props.navigation.navigate("EventDetailCard", item);
                    }}
                  />
                )}
              />
            )}
          </View>
        )}
        {/* </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
    // alignItems: "center",
  },
  ActivityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "teal",
  },
  xyz: {
    flex: 1,
    // backgroundColor: "teal",
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
  container: {
    alignItems: "center",
    marginTop: 20,
    // backgroundColor: "teal",
  },
  headerFont: {
    fontSize: 22,
    color: "black",
    // fontWeight: "bold",
  },
  border1: {
    backgroundColor: "black",
    height: 1,
    width: "100%",
    opacity: 0.5,
    marginTop: 14,
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
    width: 120,
    borderBottomWidth: 3,
    marginHorizontal: 5,
    // backgroundColor: "teal",
    alignItems: "center",
  },

  txtFeatured: {
    left: 0,
    top: 19,
    fontSize: 19,
  },
  txtMyVillage: {
    left: 0,
    top: 19,
    fontSize: 19,
    color: "black",
  },
  descriptionContainer: {
    height: 72,
    width: 344,
    marginBottom: 25,
    marginLeft: 16,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
  },
  borderDivider: {
    width: 384,
    backgroundColor: "black",
    height: 2,
    marginBottom: 16,
    left: 16,
    opacity: 0.3,
  },
  tellUsContainer: {
    height: 528,
    width: 383,
    backgroundColor: "#EEEEEE",
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
export default OfferScreen;
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
