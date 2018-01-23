import { FETCH_DATA, FETCH_LIST } from "./types";
import fetch from 'isomorphic-fetch';
import Promise from 'es6-promise';

Promise.polyfill();

export const fetchBooksList = () => async dispatch => {
    const list = await fetch('/api/books').then(response => response.json());
    dispatch({
        type: FETCH_LIST,
        payload: list
    });
};

export const fetchData = (date) => async dispatch => {
    const data = await fetch(`/api/books/${date}`).then(response => response.json());
    dispatch({
        type: FETCH_DATA,
        payload: data
    });
};