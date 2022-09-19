import {characterType} from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api/';

/*
 ** Helpers Start **
 */

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);

  try {
    // may error if there is no body
    response.parsedBody = await response.json();
  } catch (ex) {
    // Handle error here
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

async function get<T>(
  path: string,
  // args: RequestInit = {method: 'get'},
): Promise<HttpResponse<T>> {
  return http<T>(`${BASE_URL}${path}`);
  // If we need args you can use the below, but causes require cycle
  // return await http<T>(new Request(`${BASE_URL}${path}`, args));
}

export type Characters = characterType[];

/**
 * Docs
 * https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproducttrades
 */
// const history = async (page: number, count: number) =>
const getCharacters = async (page: number) =>
  get<Characters>(`character/?page=${page}`);

export const api = {
  getCharacters,
};
