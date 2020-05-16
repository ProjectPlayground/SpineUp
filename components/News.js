import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import Block from './Block';
import Text from './Text';
import Article from './Article';
import { theme } from '../constants';

import { getNews } from '../utils/fetchNews';

export default function News({}) {
  const [data, fetchData] = React.useState([]);
  const [refresh, setRefresh] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    getNews()
      .then((articles) => {
        if (mounted) {
          fetchData(articles);
          setRefresh(false);
        }
      })
      .catch(() => setRefresh(false));
    return () => mounted = false;
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(true);
  };

  return (
    <Block>
      <FlatList
        contentContainerStyle={{ paddingLeft: 5, paddingTop: 4}}
        horizontal
        data={data}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refresh}
        onRefresh={handleRefresh}
        extraData={refresh}
      />
    </Block>
  );
}
