import axios from 'axios';

const LOCAL = "http://localhost:8080/";
export const PRODUCTION_BASE_URL = '//uniapibackend-1.stratus.qa.ebay.com';

axios.defaults.baseURL = LOCAL;

export function generateDeleteRequest(path: string, params?: object) {
  return axios.request({
    url: path,
    method: 'DELETE',
    params: params,
  });
}

export function generatePostPutRequest(path: string, data: any, mode: 'PUT' | 'POST') {
  return axios.request({
    url: path,
    method: mode,
    data: data,
  });
}

export function generateGetRequest(path: string, params?: object) {
  return axios.request({
    url: path,
    method: 'GET',
    params: params,
  });
}

export function generatePostRequest(path: string, data: any, params?: object) {
  return axios.request({
    url: path,
    method: 'POST',
    params: params,
    data: data,
  });
}

export function generatePutRequest(path: string, data: any, params?: object) {
  return axios.request({
    url: path,
    method: 'PUT',
    data: data,
    params: params,
  });
}
