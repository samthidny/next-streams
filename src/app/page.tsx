import { TMDB } from "../apis/TMDB";
import { ITitle } from "../data/ITitle";
import { Reel } from "../ui/reel";

export default async function Page() {

  const getPopular: Promise<ITitle[]> = TMDB.getPopular();
  const getTrending: Promise<ITitle[]> = TMDB.getTrending();
  const getChristmas: Promise<ITitle[]> = TMDB.searchTitles('christmas');
  const [popular, trending, christmas] = await Promise.all([getPopular, getTrending, getChristmas]);

  return <div>
    <Reel title="Popular" titles={popular} />
    <Reel title="Trending" titles={trending} />
    <Reel title="Christmas" titles={christmas} />
  </div>
}