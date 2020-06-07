import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import 'firebase/firestore';
import Firebase from '../config/Firebase';
import firebase from 'firebase';

const MessageDetails = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const itemId = route.params.itemId;
  console.log('itemid', itemId);
  const chatId =
    Firebase.auth().currentUser.uid.localeCompare(itemId) > 0
      ? Firebase.auth().currentUser.uid + '' + itemId
      : itemId + '' + firebase.auth().currentUser.uid;

  const parse = (snapshot) => {
    const { createdAt: numberStamp, text, sender: user, _id } = snapshot;

    const createdAt = Date.parse(numberStamp);

    const message = {
      _id,
      createdAt,
      text,
      user,
    };
    return message;
  };

  const send = (messages) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      // 4.
      const message = {
        _id: Date.now(),
        text,
        sender: user,
        receiver: itemId,
        createdAt: new Date().toISOString(),
      };

      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .collection('recentMessages')
        .doc('sort')
        .set({
          myArr: firebase.firestore.FieldValue.arrayRemove(itemId),
          },
          { merge: true }
        )
        .then(() => {
          firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .collection('recentMessages')
            .doc('sort')
            .set({
              myArr: firebase.firestore.FieldValue.arrayUnion(itemId),
            }, {merge: true});
        })
        .catch((err) => {
          console.log('err');
        });

      firebase
        .firestore()
        .collection('users')
        .doc(itemId)
        .collection('recentMessages')
        .doc('sort')
        .set({
          myArr: firebase.firestore.FieldValue.arrayRemove(
            firebase.auth().currentUser.uid
          ),
        }, {merge: true})
        .then(() => {
          firebase
            .firestore()
            .collection('users')
            .doc(itemId)
            .collection('recentMessages')
            .doc('sort')
            .set({
              myArr: firebase.firestore.FieldValue.arrayUnion(
                firebase.auth().currentUser.uid
              ),
            },{merge: true});
        })
        .catch((err) => {
          console.log('err');
        });

      firebase
        .firestore()
        .collection('messages')
        .doc(chatId)
        .collection('messages')
        .doc(new Date().getTime().toString())
        .set(message);
    }
  };

  const user = () => {
    return {
      name: Firebase.auth().currentUser.email,
      _id: Firebase.auth().currentUser.uid,
      avatar: Firebase.auth().currentUser.photoURL,
    };
  };

  useEffect(() => {
    var unSub = null;
    firebase
      .firestore()
      .collection('messages')
      .doc(chatId)
      .get()
      .then((doc) => {
        if (!doc.data()) {
          firebase.firestore().collection('messages').doc(chatId).set({
            createdAt: new Date().toISOString(),
          });
        }
      })
      .then(() => {
        unSub = firebase
          .firestore()
          .collection('messages')
          .doc(chatId)
          .collection('messages')
          .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(function (change) {
              if (change.type === 'added') {
                setMessages((mes) =>
                  GiftedChat.append(mes, parse(change.doc.data()))
                );
              }
            });
          });
      });

    return () => {
      try {
        unSub();
      } catch {}
    };
  }, []);

  return <GiftedChat messages={messages} onSend={send} user={user()} />;
};

export default MessageDetails;
