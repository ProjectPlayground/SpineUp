/* @flow weak */

import React from 'react';
import { SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';

import { Block, Text, Button, Input } from '../components';
import { theme } from '../constants';

const PaymentScreen = ({ navigation, route }) => {
  const [number, setNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [amount, setAmount] = React.useState('GHC ');

  const profilePic = route.params.profilePic;
  const name = route.params.name;
  const subtitle = route.params.subtitle;
  const date = route.params.date;
  const time = route.params.time;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Block color="white">
          <Block padding={theme.sizes.base + 4} flex={0.1}>
            <Text h1 bold>
              Payment
            </Text>
          </Block>
          <Block style={styles.card} flex={1}>
            <Block center flex={0.4}>
              <Image
                source={require('../assets/images/mtn.png')}
                style={styles.image}
              />
            </Block>
            <Block>
              <Input
                label="Mobile Money Number"
                style={styles.input}
                defaultValue={number}
                onChangeText={(text) => setNumber(text)}
              />

              <Input
                label="Password"
                style={styles.input}
                defaultValue={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
              />

              <Input
                label="Amount"
                style={styles.input}
                defaultValue={amount}
                onChangeText={(text) => setAmount(text)}
              />
            </Block>

            <Button
              gradient
              onPress={() => {
                navigation.push('BookingSuccessful', {
                  date: date,
                  time: time,
                  name: name,
                  subtitle: subtitle,
                  profilePic: profilePic,
                });
              }}
            >
              <Text white center>
                Confirm
              </Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    borderTopLeftRadius: theme.sizes.radius * 5,
    borderTopRightRadius: theme.sizes.radius * 5,
    padding: theme.sizes.base + 4,
  },
  image: {
    width: 220,
    height: 125,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.gray2,
  },
});
