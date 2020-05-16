/* @flow weak */

import React from 'react';
import { StyleSheet, Modal, ScrollView } from 'react-native';
import { Button, Text, Block } from '../components';
import { theme } from '../constants';

const WelcomeScreen = ({ navigation }) => {
  const [terms, showTerms] = React.useState(false);

  const renderTerms = () => {
    return (
      <Modal animationType="slide" visible={terms}>
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 light>
            Terms Of Services
          </Text>

          <ScrollView style={{ paddingVertical: theme.sizes.padding }}>
            <Text caption gray height={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text caption gray height={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Text>
            <Text caption gray height={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text caption gray height={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text caption gray height={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              minim veniam.
            </Text>
            <Text caption gray height={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </ScrollView>

          <Button
            gradient
            onPress={() => {
              showTerms(!terms);
            }}
          >
            <Text center white>
              I Understand
            </Text>
          </Button>
        </Block>
      </Modal>
    );
  };

  return (
    <Block color={'white'}>
      <Block center bottom flex={0.4}>
        <Text h1 center bold>
          SPINE
          <Text h1 primary>
            UP
          </Text>
        </Text>
      </Block>
      <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
        <Button gradient onPress={() => navigation.push('Login')}>
          <Text center semibold white>
            Login
          </Text>
        </Button>

        <Button shadow onPress={() => navigation.push('SignUp')}>
          <Text center semibold>
            Signup
          </Text>
        </Button>

        <Button
          onPress={() => {
            showTerms(!terms);
          }}
        >
          <Text center caption gray>
            Terms & Conditions
          </Text>
        </Button>
      </Block>
      {renderTerms()}
    </Block>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
