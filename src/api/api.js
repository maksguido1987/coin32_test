import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const { BASE_URL, API_KEY } = publicRuntimeConfig;

export const getGames = async () => {
  const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_size=30`);
  const games = await response.json();
  return games;
};
