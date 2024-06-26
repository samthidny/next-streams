'use server'
import { TMDB } from '@/apis/TMDB';
import './title.css';
import TitleDetails from '@/ui/title-details';
import { addFavourite, cacheMovie, isAuthenticatd, isFavourite, removeFavourite } from '@/apis/supabase';
import { revalidatePath } from 'next/cache';

export default async function Page({ params }: { params: { titleID: string } }) {

  const details = await TMDB.getDetails(params.titleID);
  const isLoggedIn = await isAuthenticatd();

  //TODO - this should all be in separate API TMDB/Supabase
  const addFavouriteHandler = async (formData: FormData) => {
    'use server'

    // Cache details in tmdb_movies
    await cacheMovie(details.id, JSON.stringify(details));

    await addFavourite(details.id, details.title);

    revalidatePath('/', 'layout')

  }

  const removeFavouriteHandler = async (formData: FormData) => {
    'use server'

    await removeFavourite(details.id);

    revalidatePath('/', 'layout')

  }

  const isF = await isFavourite(details.id);

  return <div>
    <TitleDetails details={details} isFavourite={isF} isLoggedIn={isLoggedIn} addFavouriteHandler={addFavouriteHandler} removeFavouriteHandler={removeFavouriteHandler} />

  </div>
}