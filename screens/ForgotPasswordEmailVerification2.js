import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const ForgetPasswordEmailVerification = props => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.baseText}>One last thing before you begin.</Text>
      <Text style={styles.bottomTxt}>
        To make sure it's you, we sent an email to your
        <Text style={styles.bottomTxt}>**Registered email address**</Text>
      </Text>
      <Text style={styles.boldText}>Not there ?</Text>
      <Text style={styles.bottomTxt}>Peek in your junk folder. {'\n'}</Text>
      <Text style={styles.boldText}>Too busy right now ?</Text>
      <Text style={styles.bottomTxt}>You've got a whole 24 Hours.</Text>
      <ButtonComponent
        name="Resend"
        buttonStyle={styles.btnContainer}
        onPress={() => {
          props.navigation.navigate('ConfirmEmailScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  btnContainer: {
    top: 325,
  },
  tellUsbtntxt: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  },
  baseText: {
    fontSize: 26,
    top: 10,
    marginLeft: 10,
    marginTop: 10,
    lineHeight: 32,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    top: 10,
    marginLeft: 10,
    marginTop: 14,
  },
  bottomTxt: {
    fontSize: 16,
    top: 10,
    marginLeft: 10,
    marginTop: 10,
    lineHeight: 24,
  },
});

export default ForgetPasswordEmailVerification;
