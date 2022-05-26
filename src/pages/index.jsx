import { getGames } from '../api/api';
import { Games, Layout } from '../components';

export default function Home({ games }) {

  return (
    <Layout>
      <Games games={games} />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const games = await getGames();

    return {
      props: { games },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
