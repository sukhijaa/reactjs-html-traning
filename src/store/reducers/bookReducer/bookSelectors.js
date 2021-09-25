import {initialState} from "./bookReducer";

export const getAllBooksData = (store) => store.booksData.allBooks || initialState.allBooks;

export const getBooksGroupingTypeSelector = (store) => store.booksData.groupingType || initialState.groupingType;

export const getAddNewBookErrorSelector = (store) => store.booksData.addBookError || initialState.addBookError;

export const getBookById = (store, id) => {
    const allBooks = getAllBooksData(store);
    return allBooks.find(book => book.id === id)
};

export const getUserLoggedInSelector = (store) => store.booksData.isLoggedIn || initialState.isLoggedIn;
export const getUserLoggedInTokenSelector = (store) => store.booksData.loginToken || initialState.loginToken;