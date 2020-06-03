/* @flow weak */

import React from 'react';
import { SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';

import {
  Block,
  Text,
  Button,
  AppointmentCard,
  Article,
  News,
} from '../components';
import { theme } from '../constants';

import Firebase from '../config/Firebase';

console.ignoredYellowBox = ['Setting a timer'];

const HomeScreen = ({ navigation, route, props }) => {
  const user = Firebase.auth().currentUser;
  //console.log(user);
  const name = user.email;
  const photoURL = user.photoURL;

  const [use, setUse] = React.useState({ user });
  const [userPhoto, setUserPhoto] = React.useState(
    'https://p40.tr3.n0.cdn.getcloudapp.com/items/d5uve9lR/doc3.png?v=c9caed08b752e1094a00e2761aed6b0d"'
  );

  const [profilePic, setProfilePic] = React.useState(
    'https://p40.tr3.n0.cdn.getcloudapp.com/items/Jrub7OAZ/doc1.png?v=c3e0b34d42cd6d3790d4e213fa2e9db8'
  );
  const [doc, setDoc] = React.useState('Doctors Name');
  const [subtitle, setSubtitle] = React.useState('Doctors Position');
  const [date, setDate] = React.useState('date');
  const [time, setTime] = React.useState('time');
  const [userName, setUserName] = React.useState(null);

  React.useEffect(() => {
    setUse(user);

    if (photoURL) {
      setUserPhoto(photoURL);
    }
    if (user.displayName) {
      setUserName(user.displayName);
    } else {
      setUserName(name);
    }
    console.log(user);
    if (
      route.params?.profilePic ||
      route.params?.doc ||
      route.params?.subtitle
    ) {
      setProfilePic(route.params.profilePic);
      setDoc(route.params.name);
      setSubtitle(route.params.subtitle);
      setDate(route.params.date);
      setTime(route.params.time);
    }
  }, [
    user,
    name,
    photoURL,
    route.params?.profilePic,
    route.params?.doc,
    route.params?.subtitle,
    userName
  ]);

  //const doc = route.params.name;
  //const subtitle = route.params.subtitle;
  //const date = route.params.date;
  //const time = route.params.time;
  console.log(user.uid);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Block color={'white'}>
          <Block
            row
            space="between"
            style={[styles.header, styles.pad]}
            flex={0.2}
          >
            <Block colum>
              <Text h2 bold style={{ marginTop: theme.sizes.padding * 0.2 }}>
                Hello,
              </Text>
              <Text h2 bold style={{ marginTop: theme.sizes.padding / 5 }}>
                {userName}
              </Text>
            </Block>
            <Image source={{ uri: userPhoto }} style={styles.image} />
          </Block>
          <Block center margin={[10, 0]} flex={0.6} style={styles.pad}>
            <Text
              center
              caption
              gray
              style={{ marginBottom: 13 }}
              semibold
              size={16}
            >
              Next Appointment
            </Text>
            <AppointmentCard
              title={doc}
              subtitle={subtitle}
              image={{ uri: profilePic }}
              date={date}
              time={time}
              //onPress={navigation.navigate('Booking')}
            />
          </Block>
          <Block flex={0.2} style={styles.pad}>
            <Button gradient onPress={() => navigation.push('Doctors')}>
              <Text center white>
                Book An Appointment
              </Text>
            </Button>
          </Block>
          <Block flex={0.3} style={styles.pad} margin={[15, 0]}>
            <Text h1 bold>
              News
            </Text>
          </Block>
          <Block flex={0.8}>
            <News />
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: theme.sizes.base * 4.5,
    width: theme.sizes.base * 4.5,
    resizeMode: 'contain',
    borderWidth: 1,
    borderRadius: theme.sizes.base * 2.5,
    borderColor: theme.colors.primary,
  },
  header: {
    paddingVertical: theme.sizes.base * 0.5,
    //alignItems: 'center',
  },
  pad: {
    paddingLeft: theme.sizes.padding * 1.2,
    paddingRight: theme.sizes.padding * 1.2,
  },
});
