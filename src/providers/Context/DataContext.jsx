import React,{ createContext, useReducer } from 'react';

const initialState = {
    searchTerm: '',
    videos: undefined,
};

export const ACTIONS = {
    SET_SEARCH_TERM: 'set search term',
    SET_VIDEOS: 'set videos',
    CLEAR: 'clear',
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        case ACTIONS.SET_VIDEOS:
            return {
                ...state,
                videos: action.payload,
            };
        case ACTIONS.CLEAR:
            return initialState;
        default:
            return state;
    }
}

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <DataContext.Provider value={{ state, dispatch }}>
            { children }
        </DataContext.Provider>
    )
}