import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

import moment from 'moment';

import Block from './Block';
import Text from './Text';
import { theme } from '../constants';

const data = {
  source: {
    id: 'cnn',
    name: 'CNN',
  },
  author: 'Christina Maxouris, CNN',
  title:
    'Experts say states easing restrictions too early may increase the US coronavirus death toll - CNN',
  description:
    'A leading coronavirus model has upped its predicted death toll again, this time projecting 74,000 Americans will lose their lives to the virus by August.',
  url:
    'https://www.cnn.com/2020/04/28/health/us-coronavirus-tuesday/index.html',
  urlToImage:
    'https://cdn.cnn.com/cnnnext/dam/assets/200428033937-elmhurt-hospital-new-york-0425-restricted-super-tease.jpg',
  publishedAt: '2020-04-28T10:35:47Z',
  content:
    '(CNN)A leading coronavirus model has upped its predicted death toll again, this time projecting 74,000 Americans will lose their lives to the virus by August. \r\nThe projection was adjusted due to longer peaks in some states and signs that people are becoming … [+5208 chars]',
};

export default class Article extends Component {
  render() {
    const {
      color,
      style,
      image,
      title,
      subtitle,
      buttonTitle,
      article,
      onPress,
      ...props
    } = this.props;
    const cardStyles = [styles.card, style];
    const time = moment(article.publishedAt || moment.now()).fromNow();

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        <Block>
          <Image
            source={
              article.urlToImage
                ? { uri: article.urlToImage }
                : require('../assets/images/robot-prod.png')
            }
            style={styles.image}
          />
          <Block padding={[theme.sizes.base / 2, 0]}>
            <Text semibold size={16}>
              {article.title}
            </Text>
          </Block>
          <Text
            gray
            caption
            size={14}
            style={{ paddingBottom: theme.sizes.base / 2 }}
          >
            {time}
          </Text>
        </Block>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(article.url);
          }}
        >
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius:10,
    padding: theme.sizes.base / 3,
    marginBottom: theme.sizes.base,
    height: 250,
    width: 315,
    elevation: 10,
    shadowColor: '#0000ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  button: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#40C4FF',
    right: 8,
    bottom: 8,
  },
  buttonText: {
    color: '#40C4FF',
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
});
