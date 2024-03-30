'use server'
import { TMDB } from '@/apis/TMDB';
import './title.css';
import TitleDetails from '@/ui/title-details';
import { addFavourite, cacheMovie, isFavourite, removeFavourite } from '@/apis/supabase';
import { revalidatePath } from 'next/cache';

export default async function Page({ params }: { params: { titleID: string } }) {

  const details = await TMDB.getDetails(params.titleID);

  //TODO - this should all be in separate API TMDB/Supabase
  const addFavouriteHandler = async (formData: FormData) => {
    'use server'
    console.log('Server: Like', details);

    // Cache details in tmdb_movies
    await cacheMovie(details.id, JSON.stringify(details));

    await addFavourite(details.id, details.title);

    revalidatePath('/', 'layout')

  }

  const removeFavouriteHandler = async (formData: FormData) => {
    'use server'
    console.log('Server: Unlike', details);

    await removeFavourite(details.id);

    revalidatePath('/', 'layout')

  }

  const isF = await isFavourite(details.id);

  return <div>
    <TitleDetails details={details} isFavourite={isF} addFavouriteHandler={addFavouriteHandler} removeFavouriteHandler={removeFavouriteHandler} />

  </div>
}