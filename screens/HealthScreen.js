/* @flow weak */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HealthScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>I'm HealthScreen</Text>
    <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    <Button
      title="MedicalImages"
      onPress={() => navigation.navigate('MedicalImages')}
    />
    <Button
      title="MedicalBackground"
      onPress={() => navigation.navigate('MedicalBackground')}
    />
  </View>
);

export default HealthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
