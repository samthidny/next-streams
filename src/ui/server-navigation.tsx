import { isAuthenticatd } from "@/apis/supabase";
import Navigation from "./navigation";

export default async function ServerNavigation() {
    'use server'
    
    const isAuthorised = await isAuthenticatd();
    console.log('Server-navigation', isAuthorised);

    return (
        <>
        <Navigation isAuthorised={isAuthorised} />
        </>
    )
}


