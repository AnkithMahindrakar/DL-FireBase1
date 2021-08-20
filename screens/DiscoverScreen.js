//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Alert,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import firestore from "@react-native-firebase/firestore";

const DiscoverScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [particular, setParticular] = useState();

  useEffect(() => {
    let isUnmounted = false;

    const FetchUser = async () => {
      try {
        const list = [];
        await firestore()
          .collection("offices")
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
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {isLoading ? (
          <View style={styles.ActivityIndicator}>
            <ActivityIndicator size="large" color="grey" />
          </View>
        ) : (
          <View style={styles.rootContainer1}>
            <View style={styles.headerContainer1}>
              <Text style={styles.headerTxt}>Discover Derwent</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.headerTxt2}>X</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              ListHeaderComponent={
                <View>
                  <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>
                      With our ten buildings across Fitrovia, Oxford Street,
                      Marylebone, Baker Street, Mayfair, Soho and Covent Garden,
                      we have a West End space for every business.
                    </Text>
                  </View>

                  <View style={styles.borderDivider} />
                  <View style={styles.exploreContainer}>
                    <Text style={styles.exploreTxt}>Our buildings</Text>
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
                  MainContainer={styles.MainContainer}
                  TitleTxtStyle={styles.TitleTxtStyle}
                  descTxtStyle={styles.descTxtStyle}
                  isPressed={() => {
                    props.navigation.navigate("WestEndDetailedScreen", item);
                  }}
                />
              )}
            />
          </View>
        )}
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  rootContainer1: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#323232",
  },
  txtOffer: {
    fontWeight: "bold",
  },
  headerContainer1: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 6,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTxt: {
    color: "black",
    fontSize: 20,
    marginLeft: 125,
  },
  headerTxt2: {
    color: "black",
    fontSize: 20,
    marginRight: 16,
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
    height: 100,
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
    color: "white",
  },
  borderDivider: {
    width: 384,
    backgroundColor: "white",
    height: 2,
    marginBottom: 14,
    left: 14,
    opacity: 0.7,
  },
  exploreContainer: {
    height: 50,
    width: 384,
    marginLeft: 14,
    justifyContent: "center",
  },
  exploreTxt: {
    color: "white",
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
  MainContainer: {
    backgroundColor: "#323232",
  },
  TitleTxtStyle: {
    color: "white",
  },
  descTxtStyle: {
    color: "white",
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

//make this component available to the app
export default DiscoverScreen;
