import axios from 'axios';

export enum apiRoutes {
  MEDITATION_LIST = 'meditations'
}
export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
})
