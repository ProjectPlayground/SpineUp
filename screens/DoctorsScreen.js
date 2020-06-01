/* @flow weak */

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import users from '../constants/users';

import { Block, Text, Card } from '../components';
import { theme } from '../constants';

const DoctorsScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Block
      color="white"
      padding={[0, theme.sizes.padding * 1.2]}
      style={{ marginTop: theme.sizes.padding / 2 }}
    >
      <Text h1 bold>
        Doctors
      </Text>

      <Block style={{ marginTop: theme.sizes.padding / 2 }}>
        <FlatList
         removeClippedSubviews={true}
          data={users}
          keyExtractor={(item) => {
            return `${item.id.value}-${item.phone}`;
          }}
          renderItem={({ item }) => {
            const name = `${item.name.title} ${item.name.first} ${item.name.last}`;
            const sub = item.location.position;
            //console.log(item)
            return (
              <Block center padding={[4, 0]}>
                <Card
                  image={{ uri: item.picture.large }}
                  title={name}
                  subtitle={item.location.position}
                  onPress={() =>
                    navigation.push('DoctorsDetails', {
                      doctorsTitle: name,
                      location: item.location.country,
                      profilePic: item.picture.large,
                      subtitle: sub,
                      item: item,
                      uid: item.login.uid,
                    })
                  }
                />
              </Block>
            );
          }}
          //ItemSeparatorComponent={Space}
          //ListHeaderComponent={() => <Space />}
          //ListFooterComponent={() => <Space />}
        />
      </Block>
    </Block>
  </SafeAreaView>
);

export default DoctorsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
