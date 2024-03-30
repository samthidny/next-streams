import { getFavourites, isAuthenticatd } from "@/apis/supabase";
import { ITitle } from "./../../data/ITitle";
import { Reel } from "@/ui/reel";
import { redirect } from 'next/navigation'

export default async function Page() {

  const isLoggedIn = await isAuthenticatd();
  if(!isLoggedIn) {
    redirect('/signin?route=/favourites');
  }

  const favourites: ITitle[] = await getFavourites();

  return <div>

    <Reel title="Favourites" titles={favourites} />

  </div>
}