/* @flow weak */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({ navigation }) => (
  <View style={styles.container}>
    <Text>I'm About</Text>
    <Button title="Confirm" onPress={() => navigation.pop()} />
  </View>
);

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
