import React from 'react';
import axios from 'axios';

const url = 'https://api.quotable.io/random';

const config = {
  // trasnformResponse: (response) => response,
};

const GetQuotes = async () => {
  const { data } = await axios.get(url, config);

  return data;
};

export default GetQuotes;
