/* @flow weak */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MedicalImages = ({ navigation }) => (
  <View style={styles.container}>
    <Text>I'm MedicalImages</Text>
    <Button title="Confirm" onPress={() => navigation.pop()} />
  </View>
);

export default MedicalImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
