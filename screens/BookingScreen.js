/* @flow weak */

import React from 'react';
import { SafeAreaView, StyleSheet, Platform, Image, ScrollView } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const BookingScreen = ({ navigation, route, props }) => {
  const profilePic = route.params.profilePic;
  const name = route.params.name;
  const subtitle = route.params.subtitle;

  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const d = moment.utc(date).format('MM/DD/YYYY');
  const t = moment.utc(date).format('HH:mm');

  const bookDate = mode === 'date' && moment.utc(date).format('MM/DD/YYYY');

  const bookTime = mode === 'time' && moment.utc(date).format('HH:mm');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Block
          style={styles.container}
          color="white"
          padding={[theme.sizes.padding * 1, 0, 0]}
        >
          <Block center flex={0.55}>
            <Image source={{ uri: profilePic }} style={styles.image} />
            <Block center padding={[theme.sizes.padding, 0]}>
              <Text semibold size={16}>
                {name}
              </Text>
              <Text caption gray>
                {subtitle}
              </Text>
            </Block>
          </Block>

          <Block style={styles.card}>
            <Block flex={0.5} style={styles.picker}>
              <Button shadow onPress={showDatepicker}>
                <Text center>Select Date</Text>
              </Button>
              <Button shadow onPress={showTimepicker}>
                <Text center>Select Time</Text>
              </Button>
            </Block>
            <Block>
            <Text center>
                {bookDate}
                {bookTime}
              </Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
              <Block style={styles.book}>
                <Button
                  gradient
                  onPress={() =>
                    navigation.navigate('Payment', {
                      date: d,
                      time: t,
                      name: name,
                      subtitle: subtitle,
                      profilePic: profilePic,
                    })
                  }
                >
                  <Text white center>
                    Book for Ghc 100
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
      </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  card: {
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    borderTopLeftRadius: theme.sizes.radius * 5,
    borderTopRightRadius: theme.sizes.radius * 5,
    padding: theme.sizes.base + 4,
  },
  picker: {
    paddingLeft: theme.sizes.padding * 1.2,
    paddingRight: theme.sizes.padding * 1.2,
  },
  book: {
    paddingLeft: theme.sizes.padding * 1.2,
    paddingRight: theme.sizes.padding * 1.2,
    justifyContent: 'flex-end',
  },
});
