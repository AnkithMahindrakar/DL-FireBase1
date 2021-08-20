import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import SectionButton from "../components/SectionButton";
import Colors from "../constants/Colors";
import Data from "../assets/Data";
import Carousel from "react-native-snap-carousel";
import SliderCard from "../components/SliderCard";
import dynamicLinks from "@react-native-firebase/dynamic-links";
const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;
const HomeScreen = (props) => {
  const handleDynamicLink = (link) => {
    console.log("1", link.url, link);

    if (link && link.url === "https://www.google.com/") {
      props.navigation.navigate("Offer");
    } else if (link && link.url === "https://whoisanki.github.io/") {
      props.navigation.navigate("App");
    } else if (link && link.url === "https://longdogechallenge.com/") {
      props.navigation.navigate("WestEndScreen");
    } else if (link && link.url === "https://jacksonpollock.org/") {
      props.navigation.navigate("NoticeboardScreen");
    } else if (link && link.url === "https://smashthewalls.com/") {
      props.navigation.navigate("MeetingRoomScreen");
    } else {
      null;
    }
    // link && link.url === "https://whoisanki.github.io/"
    //   ? props.navigation.navigate("App")
    //   : props.navigation.navigate("Offer");
  };

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then((link) => {
        if (link && link.url === "https://www.google.com/") {
          props.navigation.navigate("Offer");
        } else if (link && link.url === "https://whoisanki.github.io/") {
          props.navigation.navigate("App");
        } else if (link && link.url === "https://longdogechallenge.com/") {
          props.navigation.navigate("WestEndScreen");
        } else if (link && link.url === "https://jacksonpollock.org/") {
          props.navigation.navigate("NoticeboardScreen");
        } else if (link && link.url === "https://smashthewalls.com/") {
          props.navigation.navigate("MeetingRoomScreen");
        } else {
          null;
        }
        // link && link.url === "https://www.google.com/"
        //   ? props.navigation.navigate("Offer")
        //   : props.navigation.navigate("App");
      })
      .catch((e) => {
        console.log(e);
      });

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  const meetingItems = ({ item, key }) => {
    return (
      <SliderCard
        img={item.img}
        title={item.title}
        description={item.description}
        btnName="Book Now"
      />
    );
  };
  const offerItems = ({ item, key }) => {
    return (
      <SliderCard
        img={item.img}
        title={item.title}
        description={item.description}
        btnName="Redeem Now"
      />
    );
  };
  const eventItems = ({ item, key }) => {
    return (
      <SliderCard
        img={item.img}
        title={item.title}
        description={item.description}
        btnName="Book Now"
      />
    );
  };
  const noticeboardItems = ({ item, key }) => {
    return (
      <SliderCard
        img={item.img}
        title={item.title}
        description={item.description}
        btnName="Read more"
      />
    );
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.headerFont}>DL/</Text>
      </View>
      <SectionButton
        name="Meeting Rooms"
        iconName="arrow-forward"
        iconColor={Colors.tint}
        btnStyle={styles.buttonStyle}
        btnTextStyle={{ fontSize: 24 }}
      />
      <Carousel
        data={Data}
        renderItem={meetingItems}
        sliderWidth={WindowWidth}
        itemWidth={WindowWidth * 0.88}
        enableSnap={true}
      />
      <SectionButton
        name="Offers"
        iconName="arrow-forward"
        iconColor={Colors.tint}
        btnStyle={styles.buttonStyle}
        btnTextStyle={{ fontSize: 24 }}
      />
      <Carousel
        data={Data}
        renderItem={offerItems}
        sliderWidth={WindowWidth}
        itemWidth={WindowWidth * 0.88}
        enableSnap={true}
      />
      <SectionButton
        name="Events"
        iconName="arrow-forward"
        iconColor={Colors.tint}
        btnStyle={styles.buttonStyle}
        btnTextStyle={{ fontSize: 24 }}
      />
      <Carousel
        data={Data}
        renderItem={eventItems}
        sliderWidth={WindowWidth}
        itemWidth={WindowWidth * 0.88}
        enableSnap={true}
      />
      <SectionButton
        name="Noticeboard"
        iconName="arrow-forward"
        iconColor={Colors.tint}
        btnStyle={styles.buttonStyle}
        btnTextStyle={{ fontSize: 24 }}
      />
      <Carousel
        data={Data}
        renderItem={noticeboardItems}
        sliderWidth={WindowWidth}
        itemWidth={WindowWidth * 0.88}
        enableSnap={true}
      />
      <TouchableOpacity style={styles.DiscoverContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.ftrimage} source={require("../assets/4.png")} />
        </View>
        <View style={styles.fottertitleContainer}>
          <Text style={styles.ftrtitles}>Building a better future</Text>
          <Text style={styles.ftrdesc}>
            Our first net-zero building launches...
          </Text>
        </View>
        <TouchableOpacity style={styles.resposiblilityContainer}>
          <Text style={styles.txtResposiblility}>Resposiblility</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  container: {
    alignItems: "center",
    marginVertical: 30,
  },
  headerFont: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
  buttonStyle: {
    borderTopColor: "black",
    borderTopWidth: 2,
    paddingTop: 10,
  },
  DiscoverContainer: {
    width: "100%",
    height: "17.3%",
    backgroundColor: "#323232",
  },
  ftrimage: {
    width: "100%",
    height: 400,
  },
  imgContainer: {
    margin: 15,
  },
  fottertitleContainer: {
    marginBottom: 5,
    marginLeft: 15,
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
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 15,
    marginVertical: 3,
    padding: 8,
  },
  txtResposiblility: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});

// FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
