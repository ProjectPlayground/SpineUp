/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput, ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Firebase from '../config/Firebase';
import 'firebase/firestore';
import firebase from 'firebase';

import { Block, Input } from '../components';
import { theme } from '../constants';

export const db = Firebase.firestore();

var node = '';
var chatId = '';
class MessageDetails extends React.Component {
  static navigationOptions = ({ navigation, route }) => ({
    title: route.params.recipientId,
  });

  state = {
    messages: [],
    currentUserId: '',
    email: '',
    displayName: '',
    photoURL: '',
  };

  makeChatNode = (currentUser, recipient) => {
    if (currentUser.length > recipient.length) {
      return currentUser + recipient;
    } else {
      return recipient + currentUser;
    }
  };

  componentDidMount = () => {
    var { currentUserId, email, displayName, photoURL } = this.state;
    console.log('CDM' + Firebase.auth().currentUser);
    currentUserId = firebase.auth().currentUser.uid;
    email = firebase.auth().currentUser.email;
    displayName = firebase.auth().currentUser.displayName;
    photoURL = firebase.auth().currentUser.photoURL;
    const { route } = this.props;
    let recipientId = route.params.recipientId;
    const chatterID = Firebase.auth().currentUser.uid;
    node = this.makeChatNode(currentUserId, recipientId);
    chatId = this.makeChatId(recipientId, chatterID);
    this.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  };

  makeChatId = (recipientId, chatterID) => {
    const chatIDpre = [];
    chatIDpre.push(chatterID);
    chatIDpre.push(recipientId);
    chatIDpre.sort();
    return chatIDpre.join('_');
  };

  async loadMessages(callback) {
    firebase
      .firestore()
      .collection('Message')
      .doc(chatId)
      .collection('Chats')
      .orderBy('createdAt', 'asc')
      .onSnapshot(function (doc) {
        doc.docChanges().forEach((chat) => {
          var id = chat.doc.id;
          chat = chat.doc.data();
          const newMessage = {
            _id: id,
            text: chat.text,
            createdAt: chat.createdAt.toDate(),
            user: {
              _id: chat.user._id,
              name: chat.user.name,
              avatar: chat.avatar,
            },
          };
          callback(newMessage);
        });
      });
  }

  onSend = (messages: []) => {
    for (let i = 0; i < messages.length; i++) {
      const { id, text, user } = messages[i];
      var messages = this.state.messages;
      console.log('hi' + chatId);
      var message = {
        key: chatId,
        id: chatId,
        text,
        createdAt: new Date(),
        user: {
          id: firebase.auth().currentUser.uid,
          name: firebase.auth().currentUser.displayName,
          avatar: 'sender.photoURL',
        },
      };
      messages.push(message);
    }
    console.log('gifted' + messages);
    firebase
      .firestore()
      .collection('Message')
      .doc(chatId)
      .collection('chats')
      .add(messages[0]);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  };

  render() {
    const { currentUserId, displayName, photoURL } = this.state;
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages, node)}
        user={{
          id: currentUserId,
          name: displayName,
          avatar: photoURL,
        }}
      />
    );
  }
}

export default MessageDetails;
