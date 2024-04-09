import { cookies } from 'next/headers';
import { ITitle } from '../data/ITitle';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { createClient } from '@/utils/supabase/server';


// const supabaseUrl = 'https://iqenpywxshkpavdsuqab.supabase.co';
// // This key is safe to use in a browser if you have enabled Row Level Security for your tables and configured policies.
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxZW5weXd4c2hrcGF2ZHN1cWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzOTAzODMsImV4cCI6MjAyMDk2NjM4M30.-mCoaXFzs8vaFpe4wswHRK1anETeqPbr9oT6bwUAQAw';
// export const supabase = createServerClient(supabaseUrl, supabaseKey);


export async function getSupabaseClient() {
    'use server'

    const client = await createClient();
    return client;
}


export async function isAuthenticatd() {
    const supabase = await getSupabaseClient();
    const user = await supabase.auth.getUser();
    return !!user.data.user;
}

export async function getFavourites(): Promise<ITitle[]> {
    'use server'
    const supabase = await getSupabaseClient();
    const { data, error } = await supabase
        .from('favourites')
        .select('tmdb_movies(tmdb_data)')

    if (error) {
        console.log('Error', error.details)
    }

    const cleaned: ITitle[] | undefined = data?.map((item: any) => JSON.parse(item.tmdb_movies.tmdb_data) as ITitle);
    return cleaned ? cleaned : [];
}

export async function isFavourite(tmdb_id: string) {
    'use server'
    const supabase = await getSupabaseClient();
    // TODO - rename title_id in db to tmdb_id for consistency
    const { data, error } = await supabase
        .from('favourites')
        .select('title_id')
        .eq('title_id', tmdb_id)

    if (error) {
        console.log('Error', error.details)
    }

    return !!data && data.length > 0;
}

// TODO - title is probably redundant now
export async function addFavourite(id: string, title: string) {
    'use server'
    const supabase = await getSupabaseClient();
    const { error } = await supabase
        .from('favourites')
        .insert({ title_id: id, title: title })

    if (error) {
        console.log('Error', error.details)
    }

    return true;
}


export async function removeFavourite(id: string) {
    'use server'
    const supabase = await getSupabaseClient();
    const { error } = await supabase
        .from('favourites')
        .delete()
        .eq('title_id', id)

    if (error) {
        console.log('Error', error.details)
    }

    return true;
}


export async function cacheMovie(id: string, data: string) {
    'use server'
    const supabase = await getSupabaseClient();
    const { error } = await supabase
        .from('tmdb_movies')
        .insert({ tmdb_id: id, tmdb_data: data })

    if (error) {
        console.log('Error', error.details)
    }

    return true;
}
