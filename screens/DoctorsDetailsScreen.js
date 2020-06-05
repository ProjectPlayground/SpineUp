/* @flow weak */

import React from 'react';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const DoctorsDetailsScreen = ({ navigation, route }) => {
  const item = route.params.item;
  const name = route.params.doctorsTitle;
  const location = route.params.location;
  const profilePic = route.params.profilePic;
  const subtitle = route.params.subtitle;
  const recipientId = route.params.uid;

  return (
    <SafeAreaView style={styles.container}>
      <Block
        color="white"
        padding={[0, 0]}
        margin={[theme.sizes.padding * 1, 0, 0]}
      >
        <Block center flex={0.55}>
          <Image source={{ uri: profilePic }} style={styles.image} />
          <Block margin={[theme.sizes.padding, 0]} center>
            <Text semibold size={16}>
              {name}
            </Text>
            <Text caption gray>
              {subtitle}
            </Text>
          </Block>
        </Block>

        <Block style={styles.card}>
          <Block column flex={0.5}>
            <Block row center>
              <FontAwesome
                name="building"
                size={16}
                color={theme.colors.primary}
              />
              <Text semibold size={16} style={styles.text}>
                Spine up hospital Limited
              </Text>
            </Block>
            <Block row center>
              <FontAwesome
                name="location-arrow"
                size={20}
                color={theme.colors.primary}
              />
              <Text caption gray style={styles.text}>
                {location}
              </Text>
            </Block>
          </Block>
          <Block flex={0.9} margin={[25, 0]}>
            <Text h2 bold style={{ marginBottom: 10 }}>
              Biography
            </Text>
            <Text gray>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Block>
          <Block row center middle marginLeft={theme.sizes.margin}>
            <Block style={styles.icon} center middle>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Messages', {
                    screen: 'MessageDetails',
                    params: { itemId: recipientId },
                  })
                }
              >
                <MaterialIcons
                  name="message"
                  size={21}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            </Block>

            <Button
              gradient
              onPress={() =>
                navigation.push('Booking', {
                  profilePic: profilePic,
                  name: name,
                  subtitle: subtitle,
                  docId: recipientId,
                })
              }
              style={styles.button}
            >
              <Text white center>
                Book an Appointment
              </Text>
            </Button>
          </Block>
          </Block>
        </Block>

    </SafeAreaView>
  );
};

export default DoctorsDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 75,
    borderColor: theme.colors.secondary,
  },
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: theme.sizes.radius * 5,
    borderTopRightRadius: theme.sizes.radius * 5,
    padding: theme.sizes.base + 4,
    elevation: 10,
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  text: {
    paddingLeft: 4,
  },
  button: {
    width: 230,
    borderRadius: 24,
  },
  icon: {
    position: 'absolute',
    left: 0,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 40,
  },
});
