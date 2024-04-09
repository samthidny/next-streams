import { TMDB } from "@/apis/TMDB";
import { ITitle } from "@/data/ITitle";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {

    const query = request.nextUrl.searchParams.get('query') || '';

    const titles: ITitle[] = await TMDB.searchTitles(query);

    const reduced = titles.filter((title: ITitle) => {
        return title.poster_path !== null;
    }).map((movie: ITitle) => {
        const rtn = { query, id: movie.id, title: movie.title }
        return rtn;
    });


    return NextResponse.json(reduced)

}