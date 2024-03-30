import { getFavourites, isAuthenticatd } from "@/apis/supabase";
import Navigation from "./navigation";

export default async function ServerNavigation() {
    'use server'
    
    const isAuthorised = await isAuthenticatd();
    let numFavourites = 0;
    console.log('Server-navigation', isAuthorised);
    if(isAuthorised) {
        const favourites = await getFavourites();
        numFavourites = favourites.length;
    }

    return (
        <Navigation isAuthorised={isAuthorised} numFavourites={numFavourites} />
    )
}


