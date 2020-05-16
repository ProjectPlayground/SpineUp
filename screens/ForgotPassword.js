import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

import { Block, Text, Input, Button } from '../components';
import { theme } from '../constants';

import Firebase from '../config/Firebase';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleReset = () => {
    setLoading(true);
    Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(setLoading(false))
      .catch((error) => {
        console.log(error);
      })
      .then(setLoading(false));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Block color={'white'} padding={[0, theme.sizes.padding * 1.2]}>
        <Text h1 bold>
          Reset Password
        </Text>
        <Block middle>
          <Input
            label="Email"
            style={styles.input}
            defaultValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            autoCapitalize="none"
          />
          <Button gradient onPress={() => handleReset()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold center white>
                Reset
              </Text>
            )}
          </Button>
          <Button onPress={() => navigation.pop()}>
            <Text gray caption center>
              Back to Login
            </Text>
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
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.gray2,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  activity: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
