import React from "react";
import { StyleSheet } from "react-native";
import Video from "react-native-video";

const introVideo = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Home");
  }, 5400);
  return (
    <Video
      source={require("../assets/video.mp4")}
      style={styles.backgroundVideo}
      fullscreen={true}
      resizeMode="cover"
    />
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
  },
});

export default introVideo;
