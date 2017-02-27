import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from './json-server/db.json'; //import the mock data, maybe you'll need generate it...
import { API_URL } from '../src/config';

// Mock all the api calls made through axios
const mock = new MockAdapter(axios);
mock.onGet(`PUT_YOUR_URL_HERE`).reply(200, data.YOUR_DATA);
mock.onPost(`PUT_YOUR_URL_HERE`).reply(200, {});
mock.onPut(`PUT_YOUR_URL_HERE`).reply(200, {});

// Fake store for redux
const storeFake = (state) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return { ...state };
    },
  };
};

global.data = data;
global.storeFake = storeFake;
