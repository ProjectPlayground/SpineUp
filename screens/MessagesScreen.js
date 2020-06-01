/* @flow weak */

import React from 'react';
import { FlatList } from 'react-native';
import Firebase from '../config/Firebase';
import ItemChat from '../components/ItemChat';

import { Block, Text } from '../components';
import { theme } from '../constants';

const MessaagesScreen = ({ navigation }) => {
  const user = Firebase.auth().currentUser.uid;
  const [chatList, setChatList] = React.useState([]);

  React.useEffect(() => {
    var unsubscribe = Firebase.firestore()
      .collection('users')
      .doc(user)
      .collection('recentMessages')
      .doc('sort')
      .onSnapshot((snapshot) => {
        setChatList(snapshot.data().myArr.reverse());
      });
    return () => {
      unsubscribe();
      setChatList([]);
    };
  },[]);
  //console.log(chatList);

  const renderItem = ({ item }) => {
    return <ItemChat item={item} navigation={navigation} />;
  };

  return (
    <Block color="white" padding={theme.sizes.padding * 1.2}>
      <Text h1 bold>
        Messages
      </Text>
      <Block padding={[theme.sizes.padding * 1.2, 0]}>
        <FlatList
          data={chatList}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </Block>
    </Block>
  );
};

export default MessaagesScreen;
