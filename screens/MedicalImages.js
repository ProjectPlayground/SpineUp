/* @flow weak */

import React from 'react';
import { StyleSheet } from 'react-native';

import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const MedicalImages = ({ navigation }) => (
  <Block
    style={styles.container}
    color="white"
    padding={[theme.sizes.padding, theme.sizes.padding * 1.2]}
  >
    <Text h1 bold center>
      Upload Images
    </Text>
    <Block style={styles.card} flex={0.6}>
      <Block style={styles.button} flex={0.2}>
        <Button onPress={() => {}}>
          <Text size={18} color="#40C4FF">
            Choose Images
          </Text>
        </Button>
      </Block>
    </Block>
    <Block flex={0.2} >
      <Button gradient style={styles.confirmButton}>
        <Text center white>
          Confirm
        </Text>
      </Button>
    </Block>
  </Block>
);

export default MedicalImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: theme.sizes.padding * 3,
    marginBottom: theme.sizes.padding * 2,
    borderRadius: theme.sizes.radius + 4,
    height: 100,
    width: '100%',
    elevation: 10,
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#40C4FF',
    borderRadius: 30,
    width: 180,
  },
  confirmButton: {
    paddingLeft: theme.sizes.padding * 1.2,
    paddingRight: theme.sizes.padding * 1.2,
  },
});
