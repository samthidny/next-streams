import { supabase } from "@/apis/supabase";
import { TMDB } from "../apis/TMDB";
import { ITitle } from "../data/ITitle";
import { Reel } from "../ui/reel";
export const dynamic = 'force-dynamic'

export default async function Page() {

  const getPopular: Promise<ITitle[]> = TMDB.getPopular();
  const getTrending: Promise<ITitle[]> = TMDB.getTrending();
  const getChristmas: Promise<ITitle[]> = TMDB.searchTitles('christmas');
  const [popular, trending, christmas] = await Promise.all([getPopular, getTrending, getChristmas]);


  const user = await supabase.auth.getUser();
  const loggedIn = user.data.user;

  return <div>
    {loggedIn ? 'User is logged in' : 'User is NOT logged in'}
    <Reel title="Popular" titles={popular} />
    <Reel title="Trending" titles={trending} />
    <Reel title="Christmas" titles={christmas} />
  </div>
}