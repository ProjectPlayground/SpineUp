/* @flow weak */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MedicalBackground = ({ navigation }) => (
  <View style={styles.container}>
    <Text>I'm MedicalBackground</Text>
    <Button title="Confirm" onPress={() => navigation.pop()} />
  </View>
);

export default MedicalBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
