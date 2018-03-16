// @flow

import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm: string) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function addApiData(apiData: Show) {
  return {
    type: ADD_API_DATA,
    payload: apiData
  };
}

export function getApiDetails(imdbID: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addApiData(response.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
