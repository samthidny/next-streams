import React from 'react'
import { ITitle } from '../data/ITitle';
import { BackButton } from './back-button';
import { LikeButton } from './like-button';


type TitleDetailsProps = {
    details: ITitle,
    isFavourite: Boolean,
    favouriteHandler: Function,
    addFavouriteHandler: Function,
    removeFavouriteHandler: Function
}


export default async function TitleDetails(props: TitleDetailsProps) {


    // const serverHandler = async () => {
    //     'use server'
    //     console.log('My server handler!');
    //     props.favouriteHandler();
    // }

    const renderLikeForm = () => {

        const serverHandler:Function = props.isFavourite ? props.removeFavouriteHandler : props.addFavouriteHandler;

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
            <h1>{details.original_title} isFav: {props.isFavourite ? 'Yes' : 'No'}</h1>
            <h2>{details.tagline}</h2>
            <h2>{details.vote_average}</h2>
            <p>{details.overview}</p>
            <img src={posterURL} alt={details.original_title}></img>
        </div>
    </div>
}
