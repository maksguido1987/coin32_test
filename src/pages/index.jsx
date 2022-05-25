import { getGames } from '../api/api';
import { Games, Layout } from '../components';

export default function Home({ games }) {
  console.log(games);

  return (
    <Layout>
      <Games games={games.results} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const games = await getGames();

  return {
    props: { games },
  };
}
