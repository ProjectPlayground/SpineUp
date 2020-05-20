/* @flow */

import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

import { Block, Text, Input, Button } from '../components';
import { theme } from '../constants';

import Firebase from '../config/Firebase';

const VALID_EMAIL = 'test@test.com';
const VALID_PASSWORD = 'password';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState(VALID_EMAIL);
  const [password, setPassword] = React.useState(VALID_PASSWORD);
  const [loading, setLoading] = React.useState(false);
  //const [error, setError] = React.useState([]);

  const handleLogin = async () => {
    {/*const result = await Firebase.auth().signInWithEmailAndPassword(
      email,
      password
    );*/}
    //console.log('result' + result);
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => setLoading(false))
      .then(() => {
        const result = Firebase.auth().currentUser;
        if (result.user.uid) {
          Firebase.firestore()
            .collection('users')
            .doc(result.user.uid)
            .collection('recentMessages')
            .doc('sort')
            .set(
              {
                myArr: [],
              },
              { merge: true }
            );
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  {/*.then(() => {
    if (result.user.uid) {
      Firebase.firestore()
        .collection('users')
        .doc(result.user.uid)
        .collection('recentMessages')
        .doc('sort')
        .set({
          myArr: [],
        });
    } else {
      Firebase.firestore().collection('users').doc(result.user.uid).update({
        last_logged_in: Date.now(),
      });
    }
  })*/}

  return (
    <SafeAreaView style={styles.container}>
      <Block color={'white'} padding={[0, theme.sizes.padding * 1.2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
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
          <Button gradient onPress={() => handleLogin()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold center white>
                Login
              </Text>
            )}
          </Button>
          <Button onPress={() => navigation.navigate('Forgot')}>
            <Text gray caption center style={styles.underline}>
              Forgot your password?
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
    backgroundColor: 'white',
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
});
