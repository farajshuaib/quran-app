import {createStore, applyMiddleware, compose} from "redux";

import thunk from "redux-thunk";

import AppReducer from "./reducers";

const initState = {
    namesOfReaders: [],
    hadithBooks: [],
    surahsFavourites: [],
    readersFavourites: [],
    followers: [],
    media: [],
    mediaPlaying: 0,
}

const Store = createStore(AppReducer, initState,
    compose(
        applyMiddleware(thunk),
    )
);

export default Store;