import axios from 'axios';
/* eslint-disable camelcase */

function onSuccess(response) {
  if (response && response.data) {
    const { error_description, errorMessage } = response.data;
    if (error_description || errorMessage) {
      console.log(error_description || errorMessage);
    }
  }
  return response.data;
}

function onError(error) {
  const { error_description, errorMessage } = error.response.data;
  if (error_description || errorMessage) {
    console.log(error_description || errorMessage);
  }
  return Promise.reject(error_description || errorMessage);
}

// A request interceptor
axios.interceptors.request.use(onSuccess, onError);

// A response interceptor
//axios.interceptors.response.use(onSuccess, onError);
