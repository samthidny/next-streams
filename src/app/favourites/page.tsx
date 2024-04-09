import { getFavourites } from "@/apis/supabase";
import { ITitle } from "./../../data/ITitle";
import { Reel } from "@/ui/reel";
import { redirect } from 'next/navigation'

export default async function Page() {

  const favourites: ITitle[] = await getFavourites();

  return <div>

    <Reel title="Favourites" titles={favourites} />

  </div>
}