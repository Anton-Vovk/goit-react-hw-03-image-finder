import axios from "axios";

const API_KEY = '20667212-59f505c313ab383d6de9d3ab5';
const BASE_URL = 'https://pixabay.com/api';

const request = (query, page) => {
  return axios.get(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default request;