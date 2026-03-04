import { fetchData } from "./data";
// public/index.js

import axios from 'axios';

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.data) {
      console.log(response)
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const createList = async (values) => {
  const ul = document.getElementById
}

const main = () => {
  fetchData('./data/value-prompts.json')
}