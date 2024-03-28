import { supabase } from "@/apis/supabase";
import Navigation from "./navigation";

export default async function ServerNavigation() {
    'use server'
    const user = await supabase.auth.getUser();
    const isAuthorised = !!user.data.user;

    console.log('Server Navigaion ', isAuthorised);

    return (
        <>
        <p>Logged in: {isAuthorised}</p>
        <Navigation isAuthorised={isAuthorised} />
        </>
    )
}


