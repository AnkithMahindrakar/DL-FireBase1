import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const SectionButton = (props) => {
  return (
    <TouchableOpacity style={{ ...styles.sectionContainer, ...props.btnStyle }}>
      <View style={styles.sectionView}>
        <Text style={{ ...styles.sectionText, ...props.btnTextStyle }}>
          {props.name}
        </Text>
        <Icon name={props.iconName} size={24} color={props.iconColor} />
      </View>
    </TouchableOpacity>
  );
};

export default SectionButton;

const styles = StyleSheet.create({
  sectionContainer: {
    marginHorizontal: 20,
    // padding: 10,

    // borderTopWidth: 1,
  },
  sectionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  sectionText: {
    fontSize: 16,
    width: 300,
    lineHeight: 24,
  },
});
