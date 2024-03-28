import { ITitle } from "../data/ITitle";
import IVideo from "../data/IVideo";

const checkAuth = async () => {
    if (!TMDB.isAuthorised) {
        return TMDB.getAuth();
    }
    return true;
}


const getResults = async (url: string, cacheID: string): Promise<ITitle[]> => {

    if (cacheID && TMDB.cache[cacheID]) {

        return TMDB.cache[cacheID] as ITitle[];
    }


    console.log('ANDY', TMDB.authToken);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB.authToken
        }
    };

    // TODO - need to catch this error properly with status 401 etc doesnt throw error: status: 401,
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        TMDB.cache[cacheID] = data.results;
        console.log('ANDY results', response)
        return data.results as ITitle[];
    } catch (error) {
        console.error('ANDY ERROR', error);
    }

    return [];
}

const getData = async (url: string, cacheID: string) => {

    await checkAuth();

    if (cacheID && TMDB.cache[cacheID]) {
        return TMDB.cache[cacheID];
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB.authToken
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        TMDB.cache[cacheID] = data;
        return data;
    } catch (error) {
    }
}

export interface ITMDB {
    cache: any;
    authToken: any;
    isAuthorised: boolean;
    getAuth: () => Promise<any>;
    getTrending: () => Promise<ITitle[]>;
    getPopular: () => Promise<ITitle[]>;
    searchTitles: (query: string) => Promise<ITitle[]>;
    getDetails: (id: string) => Promise<ITitle>;
    getVideos: (id: string) => Promise<IVideo[]>;
}


// Temporarilly putting TOKEN in here for DEV only, will eventually be sent on sign in/authentication
export const TMDB: ITMDB = {
    cache: {},
    authToken: `Bearer ${process.env.TMDB_TOKEN}`,
    isAuthorised: false,
    getAuth: async () => {

        if (TMDB.isAuthorised && TMDB.authToken) {
            return TMDB.authToken;

        }
    },

    getTrending: async () => {
        return getResults(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, 'trending');
    },

    getPopular: async () => {
        return getResults(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, 'popular');
    },

    searchTitles: async (query: string) => {
        const results = await getResults(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, `title_${query}`);
        return results.filter((title: ITitle) => title.poster_path !== null);
    },

    getDetails: async (id) => {
        return getData(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, `details_${id}`);
    },

    getVideos: async (id) => {
        const data = await getData(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, `videos_${id}`);
        return data.results;
    }

}
