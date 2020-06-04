/* @flow weak */

import React from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import { Block, Text } from '../components';
import { theme } from '../constants';

const About = ({ navigation, route }) => {
  const name = route.params.name;
  return (
    <SafeAreaView style={styles.container}>
      <Block
        color={'white'}
        padding={[theme.sizes.padding, theme.sizes.padding * 1.2]}
      >
        <Text h1 bold>
          {name}
        </Text>
        <Button title="Confirm" onPress={() => navigation.navigate('Home')} />
      </Block>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
