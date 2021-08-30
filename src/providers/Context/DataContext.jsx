import React, { useEffect, createContext, useReducer } from 'react';
import { storage } from '../../utils/storage';

const initialState = {
  searchTerm: '',
  videos: undefined,
  favoritesVideos: [],
  videoHistory: [],
};

export const ACTIONS = {
  SET_SEARCH_TERM: 'set search term',
  SET_VIDEOS: 'set videos',
  ADD_FAVORITE_VIDEO: 'add a video to favorite list',
  REMOVE_FAVORITE_VIDEO: 'remove a video to favorite list',
  RESTORE_FAVORITE_VIDEOS: 'restore videos to favorite list',
  ADD_VIDEO_HISTORY: 'add a video to the history',
  RESTORE_VIDEO_HISTORY: 'restore video history',
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
    case ACTIONS.ADD_FAVORITE_VIDEO: {
      const fav = state.favoritesVideos;
      fav.push(action.payload);
      return {
        ...state,
        favoritesVideos: fav,
      };
    }
    case ACTIONS.REMOVE_FAVORITE_VIDEO: {
      const filteredfav = state.favoritesVideos.filter(
        (video) => video.items[0].id !== action.payload
      );
      return {
        ...state,
        favoritesVideos: filteredfav,
      };
    }
    case ACTIONS.RESTORE_FAVORITE_VIDEOS:
      return {
        ...state,
        favoritesVideos: action.payload,
      };
    case ACTIONS.ADD_VIDEO_HISTORY: {
      const his = state.videoHistory;
      his.push(action.payload);
      return {
        ...state,
        videoHistory: his,
      };
    }
    case ACTIONS.RESTORE_VIDEO_HISTORY:
      return {
        ...state,
        videoHistory: action.payload,
      };
    case ACTIONS.CLEAR:
      return initialState;
    default:
      return state;
  }
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const FavVideos = storage.get('FAVORITES');
    if (FavVideos === null) {
      dispatch({
        type: ACTIONS.RESTORE_FAVORITE_VIDEOS,
        payload: [],
      });
    } else {
      dispatch({
        type: ACTIONS.RESTORE_FAVORITE_VIDEOS,
        payload: FavVideos,
      });
    }
  }, []);

  useEffect(() => {
    const videoHis = storage.get('HISTORY');
    if (videoHis === null) {
      dispatch({
        type: ACTIONS.RESTORE_VIDEO_HISTORY,
        payload: [],
      });
    } else {
      dispatch({
        type: ACTIONS.RESTORE_VIDEO_HISTORY,
        payload: videoHis,
      });
    }
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>
  );
};
