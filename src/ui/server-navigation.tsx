import { getFavourites, getSupabaseClient, isAuthenticatd } from "@/apis/supabase";
import Navigation from "./navigation";

export default async function ServerNavigation() {
    'use server'

    const client = await getSupabaseClient();
    const session = client.auth.getUser();
    console.log('User', session);


    const isAuthorised = await isAuthenticatd();
    let numFavourites = 0;
    if(isAuthorised) {
        const favourites = await getFavourites();
        numFavourites = favourites.length;
    }

    return (
        <Navigation isAuthorised={isAuthorised} numFavourites={numFavourites} />
    )
}


