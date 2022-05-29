// @ts-nocheck
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const { BASE_URL, API_KEY } = publicRuntimeConfig;

export const getGames = async (count) => {
  const response = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&page=${count}`
  );
  const games = await response.json();
  return games.results;
};

export const getGamesById = async (id) => {
  const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  const game = await response.json();
  return game;
};

export const getAdditionalGames = async (page_size, callback) => {
  const response = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&page=${page_size}`
  );
  const games = await response.json();
  callback((prevState) => prevState.concat(games.results));
};
