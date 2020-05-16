import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

import { Block, Text, Input, Button } from '../components';
import { theme } from '../constants';

import Firebase from '../config/Firebase';

export default function LogoutScreen({ navigation }) {
  const [loading, setLoading] = React.useState(false);

  const handleLogout = () => {
    setLoading(true);
    Firebase.auth()
      .signOut()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Block color={'white'} padding={[0, theme.sizes.padding * 1.2]}>
        <Text h1 bold>
          Logout
        </Text>
        <Block middle>
          <Button shadow onPress={() => handleLogout()}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text bold center style={styles.text}>
                Logout
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
  text: {
    color: 'tomato',
  },
});
