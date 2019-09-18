import { API_BASE } from '../config/config'
import axios from 'axios';

axios.defaults.baseURL = API_BASE;

export default {

  Get(link, token) {
    return axios.get(`${link}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  },
}
