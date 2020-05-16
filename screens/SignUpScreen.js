/* @flow */

import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

import { Block, Text, Input, Button } from '../components';
import { theme } from '../constants';

import Firebase from '../config/Firebase';

const VALID_EMAIL = 'test@test.com';
const VALID_PASSWORD = 'password';

export default function SignUpScreen() {
  const [email, setEmail] = React.useState(VALID_EMAIL);
  const [password, setPassword] = React.useState(VALID_PASSWORD);
  const [displayName, setDisplayName] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSignup = () => {
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => setLoading(false))
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Block color={'white'} padding={[0, theme.sizes.padding * 1.2]}>
        <Text h1 bold>
          Signup
        </Text>

        <Block middle>
          <Input
            label="First Name"
            style={styles.input}
            defaultValue={displayName}
            onChangeText={(firstName) => setDisplayName(firstName)}
          />
          <Input
            label="Email"
            style={styles.input}
            defaultValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            autoCapitalize="none"
          />
          <Input
            label="Password"
            style={styles.input}
            defaultValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            secureTextEntry={true}
          />
          <Button gradient onPress={() => handleSignup()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold center white>
                Signup
              </Text>
            )}
          </Button>
        </Block>
      </Block>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.gray2,
  },
});
