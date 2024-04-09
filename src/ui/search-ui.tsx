'use client'

import React, { useContext, useEffect, useState } from 'react'
import { Search } from './search'
import useDebounce from './hooks/use-debounce';

export default function SearchUI() {

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('')

    const value: string = '';
    const onInput = async (str: string) => {
        setQuery(str);
    };

    const debouncedValue = useDebounce(query, 400);
    useEffect(() => {
        console.log('Debounced:', debouncedValue);
        fetch(`/api/autocomplete?query=${query}`).then((response) => {
            response.json().then(titles => setResults(titles))
        });

    }, [debouncedValue])

    const onSearch = (str: string) => { console.log('onSearch', str) };

    return (
        <div>
            <h1>Search:</h1>
            <Search value={value} onInput={onInput} onSearch={onSearch} autocompleteResults={results} />
        </div>
    )
}
