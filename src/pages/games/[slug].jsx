import { getGamesById } from '../../api/api';
import { GameDetails, Layout } from '../../components';
import getConfig from 'next/config';
import { getScreenshots } from '../../api/use-swr';

const { publicRuntimeConfig } = getConfig();
export const { BASE_URL, API_KEY } = publicRuntimeConfig;

export default function GameSlug({ game }) {
  const { screenshots, isLoading, error } = getScreenshots(game.slug);

  return (
    <Layout>
      <GameDetails game={game} screenshots={screenshots} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const game = await getGamesById(params?.slug);

    return {
      props: { game },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
