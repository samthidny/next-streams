import { isAuthenticatd } from "@/apis/supabase";
import { TMDB } from "../apis/TMDB";
import { ITitle } from "../data/ITitle";
import { Reel } from "../ui/reel";
import SearchUI from "@/ui/search-ui";

export const dynamic = 'force-dynamic'

export default async function Page() {
  'use server'
  const getPopular: Promise<ITitle[]> = TMDB.getPopular();
  const getTrending: Promise<ITitle[]> = TMDB.getTrending();
  const getChristmas: Promise<ITitle[]> = TMDB.searchTitles('christmas');
  const [popular, trending, christmas] = await Promise.all([getPopular, getTrending, getChristmas]);

  return <div>
    <SearchUI />
    <Reel title="Popular" titles={popular} />
    <Reel title="Trending" titles={trending} />
    <Reel title="Christmas" titles={christmas} />
  </div>
}