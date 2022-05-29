// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { getAdditionalGames, getGames } from '../api/api';
import { Games, Layout } from '../components';
import useIntersectionObserver from '../shared/hooks/use-intersection';

export default function Home({ games }) {
  const [gamesState, setGamesState] = useState(games);
  const [page, setPage] = useState(2);

  const gamesRef = useRef(null);
  const entry = useIntersectionObserver(gamesRef, { rootMargin: '50%' });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    isVisible && setPage((prevState) => prevState + 1);
    isVisible && getAdditionalGames(page, setGamesState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <Layout>
      <Games games={gamesState} ref={gamesRef} />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const games = await getGames(1);

    return {
      props: { games },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
