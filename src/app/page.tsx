import { TMDB } from "../apis/TMDB";
import { ITitle } from "../data/ITitle";
import { Reel } from "../ui/reel";

export default async function Page() {


  const testEnvVar = process.env.TEST_ENV_VAR;

  // const getPopular: Promise<ITitle[]> = TMDB.getPopular();
  // const [popular] = await Promise.all([getPopular]);


  return <div>
    <h1>Home page</h1>
    {/* <Reel title="Popular" titles={popular} /> */}
  </div>
}