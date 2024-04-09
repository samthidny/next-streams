'use client'

import React, { useState } from 'react'
import { Search } from './search'
import { ITitle } from '@/data/ITitle';

export default function SearchUI() {

    // TODO - the problem is this needs to be async
    const [results, setResults] = useState([]);

    const value: string = '';
    const onInput = async (str: string) => {
        const response = await fetch(`/api/autocomplete?query=${str}`);
        // waits until the request completes...
        // const response = [
        //     {
        //         "query": "alien",
        //         "id": 348,
        //         "title": "Alien"
        //     },
        //     {
        //         "query": "alien",
        //         "id": 506517,
        //         "title": "My Grandpa is an Alien"
        //     },
        //     {
        //         "query": "alien",
        //         "id": 601796,
        //         "title": "Alienoid"
        //     },
        //     {
        //         "query": "alien",
        //         "id": 817189,
        //         "title": "Alien"
        //     } 
        // ]
        console.log(response);
        setResults(response.json());
    };
    const onSearch = (str: string) => { console.log('onSearch', str) };
    //const autocompleteResults: ITitle[] = [];


    return (
        <div>
            <h1>Search {results.length}</h1>
            <Search value={value} onInput={onInput} onSearch={onSearch} autocompleteResults={results} />
        </div>
    )
}
