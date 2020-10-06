import axios from 'axios';
import { IAPIResponse } from '../typing';

const parseInput = (str: string) => {
  return str.replace(/[ ]/gi, '+') || '';
};

const searchGoogle = async (queryString: string): Promise<IAPIResponse[]> => {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${parseInput(queryString)}&num=10`,
      headers: {
        'Content-Type': 'application/octet-stream',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        useQueryString: true,
      },
    });
    return (response.data.results as Array<any>).map(r => ({
      title: r.title,
      link: r.link,
      description: r.description,
      type: 'google',
    }));
  } catch (err) {
    throw err;
  }
}

const searchBing = async (queryString: string): Promise<IAPIResponse[]> => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://bing-web-search1.p.rapidapi.com/search',
      headers: {
        'Content-Type': 'application/octet-stream',
        'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-BingApis-SDK': true,
      },
      params: {
        q: queryString,
        answerCount: 30,
      },
    });
    return (response.data.webPages.value as Array<any>).map(r => ({
      title: r.name,
      link: r.url,
      description: r.snippet,
      type: 'bing',
    }));
  } catch (err) {
    throw err;
  }
};

const searchIntegration = async (queryString: string): Promise<{
  results: IAPIResponse[],
  err: any | null
}> => {
  try {
    const googleResults = await searchGoogle(queryString);
    const bingResults = await searchBing(queryString);
    return {
      results: [
        ...googleResults,
        ...bingResults,
      ],
      err: null,
    };
  } catch (err) {
    return {
      results: [],
      err,
    };
  }
};

export default searchIntegration;
