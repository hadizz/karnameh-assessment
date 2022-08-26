import axios from 'axios';

export const api = (options) => axios.create()({...options});
