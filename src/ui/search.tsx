import React, { useEffect, useState } from "react";
import './search.css';
import AutoComplete from "./autocomplete";
import { ITitle } from "../data/ITitle";


type SearchProps = {
    value: string,
    onInput: Function,
    onSearch: Function,
    autocompleteResults: ITitle[]
}


export function Search(props: SearchProps) {

    const [search, setSearch] = useState(props.value || '');
    const [showAutoComplete, setShowAutoComplete] = useState(false);

    useEffect(() => {

        return () => {
        }

    }, [showAutoComplete])

    function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
        props.onInput && props.onInput(event.target.value);
    }

    function searchHandler() {
        props.onSearch && props.onSearch(search);
    }

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        searchHandler();
    }

    function focusHandler() {
        setShowAutoComplete(true);
    }

    function blurHandler() {
        // TODO - this is a bad work around because Link action isnt being dispatched because focus lost
        setTimeout(() => {
            //setShowAutoComplete(false);
        }, 1000);

    }

    const autoComplete: JSX.Element = showAutoComplete ? <><AutoComplete results={props.autocompleteResults}></AutoComplete></> : <></>;

    return <div>
        <form className="search" onSubmit={submitHandler} onBlur={blurHandler}>
            {/* <label htmlFor="search">Search:</label> */}
            <div className="search-text-container">
                <input id="search" type="search" placeholder="Search" onInput={inputHandler} value={search} onFocus={focusHandler} ></input>
                {autoComplete}
            </div>
            <button type="submit" onClick={searchHandler}>Search</button>
        </form>
    </div>

}