import React from 'react';
import axios from 'axios';

const url = 'https://api.quotable.io/random';

const GetQuotes = async () => {
  const { data } = await axios.get(url);

  return data;
};

export default GetQuotes;
