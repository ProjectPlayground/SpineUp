/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


const WIDTH = Dimensions.get('window').width;
export default class Order extends Component {
  state={
    text: ''
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.card}>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#ededed', }}>
          <Text style={{fontSize: 21, textAlign: 'center',marginBottom: 12, marginTop: 6}}> Welcome Tolu </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')} style={styles.container}>
          <View style={styles.leftCol}>
            <Text style={{fontSize: 8}}> {'\u25A0'} </Text>
          </View>

          <View style={styles.centerCol}>
            <Text style={{fontSize: 21, color: '#545454'}}>
          Search Errands
            </Text>
          </View>

          <View style={styles.rightCol}>
            <Ionicons name= "ios-arrow-dropright-circle" color='#000000' size={30} style={{alignSelf: 'center'}}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 12,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  container: {
    zIndex : 9,
    position: 'absolute',
    flexDirection: 'row',
    width: (WIDTH - 40),
    height: 60,
    //top: 110,
    //left: 20,
    right: 0,
    left: 20,
    bottom: 70,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000000',
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  leftCol:{
    flex: 1,
    alignItems: 'center'
  },
  centerCol:{
    flex: 4
  },
  rightCol:{
    flex: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed'
  }



});

{ /* const styles = StyleSheet.create({
  container: {
    //flex: 0.5,
    backgroundColor: 'gray',
    borderRadius: 6,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    padding: 12,
    //marginHorizontal: 24,

    //height: 200


  },
  text:{
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 18
  },
  textInput:{
    height: 40,
    borderWidth: 1,
    borderRadius:6,
    borderColor: 'gray'
  }
}); */}
