/* @flow weak */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Firebase from '../config/Firebase';

const MessaagesScreen = ({ navigation }) => {
  const itemId = Firebase.auth().currentUser.uid;
  return (
    <View style={styles.container}>
      <Text>I'm MessaagesScreesn</Text>
      <Button
        title="Message Details"
        onPress={() => navigation.push('MessageDetails', { itemId: itemId })}
      />
    </View>
  );
};

export default MessaagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
