import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Block from './Block';
import Text from './Text';
import { theme } from '../constants';

export default class AppointmentCard extends Component {
  render() {
    const {
      color,
      style,
      title,
      subtitle,
      buttonTitle,
      onPress,
      iconName,
      ...props
    } = this.props;
    const cardStyles = [styles.card, style];

    return (
      <TouchableOpacity style={[cardStyles]} {...props} onPress={onPress}>
        <Block style={styles.block}>
          <AntDesign name={iconName} size={32} color="#40C4FF" />
          <Block padding={[0, 16]}>
            <Text h1 semibold>
              {title}
            </Text>
            <Text caption gray>
              {subtitle}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

export const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#40C4FF',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
