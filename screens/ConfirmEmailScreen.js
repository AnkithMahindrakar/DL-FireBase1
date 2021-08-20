import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const ForgetPasswordEmailVerification = props => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.txtContainer}>
        <Text style={styles.baseText}>Email verification message</Text>
      </View>
      <ButtonComponent name="Confirm" buttonStyle={styles.btnContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  txtContainer: {
    // backgroundColor: 'teal',
    height: 82,
    width: 343,
    top: 30,
  },
  baseText: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#90969F',
  },
  btnContainer: {
    backgroundColor: '#50585D',
    height: 56,
    width: 383,
    top: 505,
  },
});

export default ForgetPasswordEmailVerification;
