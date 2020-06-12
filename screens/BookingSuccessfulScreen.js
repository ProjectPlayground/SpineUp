/* @flow weak */

import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Firebase from '../config/Firebase';
import firebase from 'firebase';
import 'firebase/firestore';

import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const BookingSuccessfulScreen = ({ navigation, route }) => {
  const profilePic = route.params.profilePic;
  const name = route.params.name;
  const subtitle = route.params.subtitle;
  const date = route.params.date;
  const time = route.params.time;
  const docID = route.params.docId;
  //console.log('docId', docID);
  const [appointments, setAppointments] = React.useState([]);

  const make = () => {
    const appointment = {
      date: date,
      time: time,
      sender: user,
      receiver: receiver,
    };
    firebase.firestore().collection('appointment').doc().set(appointment);
  };

  const user = {
    name: Firebase.auth().currentUser.displayName,
    id: Firebase.auth().currentUser.uid,
    avatar: Firebase.auth().currentUser.photoURL,
    account_type: 'client',
  };

  const receiver = {
    name: name,
    subtitle: subtitle,
    id: docID,
    avatar: profilePic,
    account_type: 'doctor',
  };

  const get = () => {
    var service_type = '';

  {/*  if (user.account_type === 'client') {
      service_type = 'sender';
    } else if (user.account_type === 'doctor') {
      service_type = 'receiver';
    }
  */}

    firebase
      .firestore()
      .collection('users')
      .doc(Firebase.auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data().account_type === 'client') {
          service_type = 'sender';
        } else if (doc.data().account_type === 'doctor') {
          service_type = 'receiver';
        }
      })
      .then(() => {
        console.log('currSer', service_type);
        firebase
          .firestore()
          .collection('appointment')
          .where(
            new firebase.firestore.FieldPath(service_type, 'id'),
            '==',
            Firebase.auth().currentUser.uid
          )
          .get()
          .then((snapshot) => {
            var array = [];
            snapshot.forEach((apt) => {
              if (apt.exists) {
                var ret = apt.data();
                //.console.log(ret);
                array.push(ret);
                setAppointments(array);
                console.log('apt', appointments);
              }
            });
          });
      });
  };

  //console.log('apt', appointments);

{/*const appointmentID =
    Firebase.auth().currentUser.uid.localeCompare(docID) > 0
      ? Firebase.auth().currentUser.uid + '' + docID
      : docID + '' + firebase.auth().currentUser.uid;

  console.log('uid', appointmentID);

  const make = (appointments) => {
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

    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .collection('recentAppointments')
      .doc('sort')
      .set(
        { myArr: firebase.firestore.FieldValue.arrayRemove(docID) },
        { merge: true }
      )
      .then(() => {
        firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .collection('recentAppointments')
          .doc('sort')
          .set(
            { myArr: firebase.firestore.FieldValue.arrayUnion(docID) },
            { merge: true }
          );
      })
      .catch((err) => console.log(err));

    firebase
      .firestore()
      .collection('users')
      .doc(docID)
      .collection('recentAppointments')
      .doc('sort')
      .set(
        {
          myArr: firebase.firestore.FieldValue.arrayRemove(
            firebase.auth().currentUser.uid
          ),
        },
        { merge: true }
      )
      .then(() => {
        firebase
          .firestore()
          .collection('users')
          .doc(docID)
          .collection('recentAppointments')
          .doc('sort')
          .set(
            {
              myArr: firebase.firestore.FieldValue.arrayUnion(
                firebase.auth().currentUser.uid
              ),
            },
            { merge: true }
          );
      })
      .catch((err) => {
        console.log(err);
      });
    firebase
      .firestore()
      .collection('appointments')
      .doc(appointmentID)
      .collection('appointments')
      .doc(new Date().getTime().toString())
      .set(appointment);
  };

  const user = {
    name: Firebase.auth().currentUser.displayName,
    id: Firebase.auth().currentUser.uid,
    avatar: Firebase.auth().currentUser.photoURL,
  };
*/}



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

        <Button gradient onPress={() => make()}>
          <Text white center>
            Confirm
          </Text>
        </Button>
        <Button gradient onPress={() => get()}>
          <Text white center>
            get Appointments
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
