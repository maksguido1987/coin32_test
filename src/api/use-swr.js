// @ts-nocheck
import getConfig from 'next/config';
import useSWR from 'swr';

const { publicRuntimeConfig } = getConfig();
export const { BASE_URL, API_KEY } = publicRuntimeConfig;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getScreenshots = (slug) => {
  const { data, error } = useSWR(
    `${BASE_URL}/games/${slug}/screenshots?key=${API_KEY}`,
    fetcher
  );

  return {
    screenshots: data,
    isLoading: !error && !data,
    isError: error,
  };
};