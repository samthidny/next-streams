import { getFavourites } from "@/apis/supabase";
import { ITitle } from "./../../data/ITitle";
import { Reel } from "@/ui/reel";

export default async function Page() {

  const favourites: ITitle[] = await getFavourites();

  return <div>

    <h1>Favs</h1>
    
    <Reel title="Favourites" titles={favourites} />

  </div>
}