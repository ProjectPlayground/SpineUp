import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import Block from './Block';
import Text from './Text';
import { theme } from '../constants';

export default class AppointmentCard extends Component {
  render() {
    const {
      color,
      style,
      image,
      title,
      subtitle,
      buttonTitle,
      date,
      time,
      onPress,
      ...props
    } = this.props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        <Block>
          <Block flex={1} row center>
            <Image source={image} style={styles.image} />
            <Block style={{ alignItems: 'flex-end' }}>
              <Text semibold size={16}>
                {date}
              </Text>
              <Text semibold size={16}>
                {time}
              </Text>
            </Block>
          </Block>
          <Block row center flex={0.3}>
            <Block>
              <Text semibold size={16}>
                {title}
              </Text>
              <Text caption gray>
                {subtitle}
              </Text>
            </Block>
            <TouchableOpacity onPress={onPress} style={styles.button}>
              <Text style={styles.buttonText}>Reschedule</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius + 4,
    paddingLeft: theme.sizes.base + 4,
    paddingRight: theme.sizes.base + 4,
    paddingBottom: theme.sizes.base,
    paddingTop: theme.sizes.base,
    marginBottom: theme.sizes.base,
    height: 160,
    width: '100%',
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#40C4FF',
  },
  buttonText: {
    color: '#40C4FF',
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
});
