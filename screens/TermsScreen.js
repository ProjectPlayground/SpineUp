/* @flow weak */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TermsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>I'm TermsScreen</Text>
    <Button title="Confirm" onPress={() => navigation.pop()} />
  </View>
);

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
