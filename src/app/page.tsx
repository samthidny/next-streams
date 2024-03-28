import { TMDB } from "../apis/TMDB";
import { ITitle } from "../data/ITitle";
import { Reel } from "../ui/reel";

export default async function Page() {


  const testEnvVar = process.env.TEST_ENV_VAR;

  const getPopular: Promise<ITitle[]> = TMDB.getPopular();
  const [popular] = await Promise.all([getPopular]);


  return <div>
    <h1>Home page TMDB_TOKEN:{process.env.TMDB_TOKEN}</h1>
    <h2>TEST_ENV_VAR:{process.env.TEST_ENV_VAR}</h2>
    <Reel title="Popular" titles={popular} />
  </div>
}