import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import Block from './Block';
import Text from './Text';
import { theme } from '../constants';

export default class Card extends Component {
  render() {
    const {
      color,
      style,
      image,
      title,
      subtitle,
      buttonTitle,
      onPress,
      ...props
    } = this.props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        <Block row center>
          <Image source={image} style={styles.image} />
          <Block padding={[0, 16]}>
            <Text semibold size={16}>
              {title}
            </Text>
            <Text caption gray>
              {subtitle}
            </Text>
          </Block>
        </Block>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
    height: 150,
    width: '95%',
    elevation: 10,
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#40C4FF',
    right: 16,
    bottom: 16,
  },
  buttonText: {
    color: '#40C4FF',
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
});
