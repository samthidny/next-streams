import { createClient } from '@supabase/supabase-js'
import { ITitle } from '../data/ITitle';
const supabaseUrl = 'https://iqenpywxshkpavdsuqab.supabase.co';
// This key is safe to use in a browser if you have enabled Row Level Security for your tables and configured policies.
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxZW5weXd4c2hrcGF2ZHN1cWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzOTAzODMsImV4cCI6MjAyMDk2NjM4M30.-mCoaXFzs8vaFpe4wswHRK1anETeqPbr9oT6bwUAQAw';
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getFavourites(): Promise<ITitle[]> {
    'use server'
    const { data, error } = await supabase
        .from('favourites')
        .select('tmdb_movies(tmdb_data)')

    if (error) {
        console.log('Error', error.details)
    }

    const cleaned:ITitle[] | undefined = data?.map((item:any) => JSON.parse(item.tmdb_movies.tmdb_data) as ITitle);
    console.log('CLEANED....', cleaned);

    return cleaned ? cleaned : [];
}


export async function addFavourite(id: string, title: string) {
    'use server'
    const { error } = await supabase
        .from('favourites')
        .insert({ title_id: id, title: title })

    if (error) {
        console.log('Error', error.details)
    }

    console.log('Added favourite to supabase!!!!!');
    return true;
}


export async function removeFavourite(id: string) {
    'use server'
    const { error } = await supabase
        .from('favourites')
        .delete()
        .eq('title_id', id)

    if (error) {
        console.log('Error', error.details)
    }

    console.log('Deleted favourite to supabase!!!!!');
    return true;
}

