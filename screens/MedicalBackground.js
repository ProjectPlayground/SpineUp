/* @flow weak */

import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { Block, Text, Button, Input } from '../components';
import { theme } from '../constants';

const MedicalBackground = ({ navigation }) => {
  const [message, setMessage] = React.useState('');
  return (
    <Block
      style={styles.container}
      color="white"
      padding={[theme.sizes.padding * 1.2, theme.sizes.padding * 2]}
    >
      <Text h1 bold center>
        Tell us about your medical background
      </Text>
      <Block style={styles.card} flex={0.6}>
        <Block style={styles.button} flex={0.2}>
          <Input
            label="message"
            style={styles.input}
            defaultValue={message}
            onChangeText={(userMessage) => setMessage(userMessage)}
            autoCapitalize="none"
          />
        </Block>
      </Block>
      <Block flex={0.2}>
        <Button
          gradient
          style={styles.confirmButton}
          onPress={() => navigation.pop()}
        >
          <Text center white>
            Confirm
          </Text>
        </Button>
      </Block>
    </Block>
  );
};

export default MedicalBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: theme.sizes.padding * 3,
    marginBottom: theme.sizes.padding * 2,
    paddingTop: theme.sizes.padding / 2,
    paddingLeft: theme.sizes.padding / 2,
    borderRadius: theme.sizes.radius + 4,
    height: 100,
    width: '100%',
    elevation: 10,
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  confirmButton: {
    paddingLeft: theme.sizes.padding * 1.2,
    paddingRight: theme.sizes.padding * 1.2,
  },
  input: {
    borderWidth: 0,
  },
});
