/* @flow weak */

import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Firebase from '../config/Firebase';

import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const BookingSuccessfulScreen = ({ navigation, route }) => {
  const profilePic = route.params.profilePic;
  const name = route.params.name;
  const subtitle = route.params.subtitle;
  const date = route.params.date;
  const time = route.params.time;
  const docID = route.params.docId;
  console.log('docId', docID);

  const AppointmentID =
    Firebase.auth().currentUser.uid.localCompare(docID) > 0
      ? Firebase.auth().currentUser.uid + '' + docID
      : docID + '' + Firebase.auth().currentUser.uid;

  //console.log('uid', AppointmentID);

  const make = (appointments) => {
    for (let i = 0; i < appointments.length; i++) {
      let { user } = appointments[i];

      const appointment = {
        date: date,
        time: time,
        name: name,
        subtitle: subtitle,
        profilePic: profilePic,
        sender: user,
        receiver: docID,
        createdAt: new Date().toISOString(),
      };
    }
  };

  const user = () => {
    return {
      name: Firebase.auth().currentUser.displayName,
      id: Firebase.auth().currentUser.uid,
      avatar: Firebase.auth.currentUser.photoURL,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <Block color="white" padding={theme.sizes.base * 2}>
        <Block marginBottom={theme.sizes.base * 4}>
          <Text h1 bold>
            Booking Succesful
          </Text>
          <Image
            source={require('../assets/images/congrats.png')}
            style={styles.image}
          />
        </Block>

        <Block>
          <Block center flex={0.25}>
            <Text bold size={25}>
              Booking Succesful
            </Text>
            <Text caption gray size={14}>
              Your booking has been confirmed
            </Text>
          </Block>

          <Block row center flex={0.1}>
            <MaterialIcons
              name="date-range"
              size={16}
              color={theme.colors.gray}
            />
            <Text semibold size={16} style={{ paddingLeft: 4 }}>
              Date
            </Text>
            <Block style={{ alignItems: 'flex-end' }}>
              <Text semibold size={16}>
                {date}
              </Text>
            </Block>
          </Block>

          <Block row center flex={0.1}>
            <AntDesign name="clockcircle" size={16} color={theme.colors.gray} />
            <Text semibold size={16} style={{ paddingLeft: 4 }}>
              Time
            </Text>
            <Block style={{ alignItems: 'flex-end' }}>
              <Text semibold size={16}>
                {time}
              </Text>
            </Block>
          </Block>

          <Block row center flex={0.1}>
            <FontAwesome
              name="location-arrow"
              size={21}
              color={theme.colors.gray}
            />
            <Text semibold size={16} style={{ paddingLeft: 4 }}>
              Location
            </Text>
            <Block style={{ alignItems: 'flex-end' }}>
              <Text semibold size={16}>
                Spine Up center
              </Text>
            </Block>
          </Block>

          <Block row center flex={0.1}>
            <FontAwesome
              name="location-arrow"
              size={21}
              color={theme.colors.gray}
            />
            <Text semibold size={16} style={{ paddingLeft: 4 }}>
              Doctor
            </Text>
            <Block style={{ alignItems: 'flex-end' }}>
              <Text semibold size={16}>
                {name}
              </Text>
            </Block>
          </Block>

          <Block row center flex={0.1}>
            <FontAwesome
              name="location-arrow"
              size={21}
              color={theme.colors.gray}
            />
            <Text semibold size={16} style={{ paddingLeft: 4 }}>
              position
            </Text>
            <Block style={{ alignItems: 'flex-end' }}>
              <Text semibold size={16}>
                {subtitle}
              </Text>
            </Block>
          </Block>
        </Block>

        <Button
          gradient
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Home',
              params: {
                date: date,
                time: time,
                name: name,
                subtitle: subtitle,
                profilePic: profilePic,
              },
            })
          }
        >
          <Text white center>
            Confirm
          </Text>
        </Button>
      </Block>
    </SafeAreaView>
  );
};

export default BookingSuccessfulScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 360,
    height: 285,
    resizeMode: 'contain',
  },
});
