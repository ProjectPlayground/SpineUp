import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Firebase from '../config/Firebase';
import 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';

import { Block, Text, Card } from '../components';
import { theme } from '../constants';

const ItemChat = ({ item, navigation }) => {
  const [name, setName] = React.useState('');
  const [pic, setPic] = React.useState('');

  React.useEffect(() => {
    Firebase.firestore()
      .collection('users')
      .doc(item)
      .get()
      .then((doc) => {
        //console.log(doc.data().name);
        console.log(doc.data().pic);
        setName(doc ? doc.data().name : '');

        setPic(doc ? doc.data().pic : null);
      });
  },[]);
  return (
    <Block
      row
      center
      color="white"
      border
      padding={theme.sizes.padding / 2}
      style={styles.container}
    >
      <Image source={pic ? { uri: pic } : null} style={styles.image} />
      <Block padding={[0, 16]}>
        <Text h2 semibold>
          {name ? name : ''}
        </Text>
      </Block>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('MessageDetails', { itemId: item });
        }}
      >
        <MaterialIcons name="message" size={21} color={theme.colors.primary} />
      </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.gray2,
    padding: theme.sizes.padding,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ItemChat;
