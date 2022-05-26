// @ts-nocheck
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const { BASE_URL, API_KEY } = publicRuntimeConfig;

export const getGames = async () => {
  const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_1`);
  const games = await response.json();
  return games.results;
};

export const getGamesById = async (id) => {
  const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  const game = await response.json();
  return game;
};
