import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '../constants';

export const Row = ({ title, subtitle, image, button }) => (

  <View style={styles.container}>
    <View style={styles.content}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </View>
    <TouchableOpacity>{button}</TouchableOpacity>
  </View>

);

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
    //backgroundColor: 'gray',
    width: '90%',
    height: 150,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
});
