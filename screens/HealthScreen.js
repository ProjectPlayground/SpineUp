/* @flow weak */

import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Block, Text, HealthCard } from '../components';
import { theme } from '../constants';

class HealthScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Block
          padding={[0, theme.sizes.padding * 1.2]}
          margin={[theme.sizes.padding * 2, 0]}
        >
          <HealthCard
            title="Personal Info"
            subtitle="Update your info"
            iconName="form"
            onPress={() => navigation.navigate('Profile')}
          />

          <HealthCard
            title="Medical Images"
            subtitle="Upload tests, xrays or any relevant info"
            iconName="picture"
            onPress={() => navigation.navigate('MedicalImages')}
          />

          <HealthCard
            title="Medical History"
            subtitle="View & update your medical history"
            iconName="copy1"
            onPress={() => navigation.navigate('MedicalBackground')}
          />
        </Block>
      </ScrollView>
    );
  }
}
export default HealthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    borderRadius: theme.sizes.radius + 4,
    paddingLeft: theme.sizes.base * 3,
    paddingRight: theme.sizes.base + 4,
    paddingBottom: theme.sizes.base,
    paddingTop: theme.sizes.base,
    marginBottom: theme.sizes.base,
    height: 100,
    width: '100%',
    elevation: 10,
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
});
