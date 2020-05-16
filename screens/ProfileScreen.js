/* @flow weak */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';

import { Block, Text, Input, Button } from '../components';
import { theme } from '../constants';
import Firebase from '../config/Firebase';

const ProfileScreen = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const user = Firebase.auth().currentUser;

  const update = () => {
    setLoading(true);
    user
      .updateProfile({
        displayName: `${firstName} ${lastName}`,
        photoURL:
          'file:///Users/mac/Devs/RN/SpineUp/assets/images/robot-dev.png',
      })
      .then(() => {
        setLoading(false);
        const name = `${firstName}`;
        console.log(
          'updated userName. name:' + `${firstName} ${lastName}`,
          'and profile picture:' + user.photoURL
        );
      })
      .then(() => navigation.navigate('Home'))
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
    console.log(user);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Block color={'white'} padding={[0, theme.sizes.padding * 1.2]}>
        <Text h1 bold>
          Profile
        </Text>
        <Block style={{ marginTop: theme.sizes.padding * 1 }}>
          <Block center>
            <Button>
              <Image
                source={{
                  uri:
                    'file:///Users/mac/Devs/RN/SpineUp/assets/images/robot-dev.png',
                }}
                style={styles.image}
              />
            </Button>
          </Block>
          <Input
            label="First Name"
            style={styles.input}
            defaultValue={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <Input
            label="Last Name"
            style={styles.input}
            defaultValue={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </Block>
        <Block middle style={{ marginBottom: theme.sizes.padding * 5 }}>
          <Button shadow onPress={() => update()}>
            {loading ? (
              <ActivityIndicator size="small" color="#000ff" />
            ) : (
              <Text center semibold>
                Confirm
              </Text>
            )}
          </Button>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.gray2,
  },
  image: {
    height: theme.sizes.base * 5,
    width: theme.sizes.base * 5,
    resizeMode: 'contain',
    borderRadius: theme.sizes.base * 2.5,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
});
