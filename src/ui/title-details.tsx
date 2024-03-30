import React from 'react'
import { ITitle } from '../data/ITitle';
import { BackButton } from './back-button';
import { LikeButton } from './like-button';


type TitleDetailsProps = {
    details: ITitle,
    isFavourite: boolean,
    addFavouriteHandler: Function,
    removeFavouriteHandler: Function
}


export default async function TitleDetails(props: TitleDetailsProps) {

    const renderLikeForm = () => {

        // TODO - setting type as any, as next doesnt seem to like passing server actions down as :Function- need to investigate
        const serverHandler: any = props.isFavourite ? props.removeFavouriteHandler : props.addFavouriteHandler;

        return <form action={serverHandler}>
            <input name="id" type="hidden" defaultValue={details.id} />
            <LikeButton selected={props.isFavourite}></LikeButton>
        </form>

    }


    const details = props.details;

    const posterURL = `https://image.tmdb.org/t/p/w300/${details.poster_path}`;
    const backdropURL = `https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`;

    return <div style={{ backgroundImage: `url(${backdropURL})` }}>
        <div className="info-text">
            <div className="header">
                <div className="back-button">
                    <BackButton></BackButton>
                </div>
                <div className="like-button">
                    {renderLikeForm()}
                </div>
            </div>
            <h1>{details.original_title}</h1>
            <h2>{details.tagline}</h2>
            <h2>{details.vote_average}</h2>
            <p>{details.overview}</p>
            <img src={posterURL} alt={details.original_title}></img>
        </div>
    </div>
}
