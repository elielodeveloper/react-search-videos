import axios from 'axios';

const KEY = 'AIzaSyCa8b2VfJISv1TgB4GrI5elUTP1GSM3gS0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 6,
    key: KEY
  }  
});