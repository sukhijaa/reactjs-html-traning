import {
    ADD_NEW_BOOK_ACTIONTYPE, SET_ADD_BOOK_ERROR_ACTIONTYPE,
    SET_ALL_BOOKS_DATA_ACTIONTYPE,
    SET_BOOKS_GROUPING_TYPE_ACTIONTYPE
} from "./bookActionType";

export const setBooksGroupingTypeAction = (groupingType) => ({
    type: SET_BOOKS_GROUPING_TYPE_ACTIONTYPE,
    payload: groupingType
});

export const setAllBooksDataAction = (allBooks) => ({
    type: SET_ALL_BOOKS_DATA_ACTIONTYPE,
    payload: allBooks
});

export const addNewBookAction = (newBookData) => ({
    type: ADD_NEW_BOOK_ACTIONTYPE,
    payload: newBookData
});

export const setAddNewBookErrorAction = (error) => ({
    type: SET_ADD_BOOK_ERROR_ACTIONTYPE,
    payload: error
});