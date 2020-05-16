import { NEWS_API_KEY } from 'react-native-dotenv';

const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

export async function getNews() {
  let response = await fetch(url);
  let json = await response.json();
  //console.log(json);
  return json.articles;
}
