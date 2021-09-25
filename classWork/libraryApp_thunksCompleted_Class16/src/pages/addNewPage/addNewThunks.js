import {getAllBooksData} from "../../store/reducers/bookReducer/bookSelectors";
import {addNewBookAction, setAddNewBookErrorAction} from "../../store/reducers/bookReducer/bookActions";
import {getAllBooksDataThunk} from "../libraryHome/libraryThunks";

export const addNewBookThunk = (bookData, history) => async (dispatch, getState) => {
    let store = getState();
    let allBooksData = getAllBooksData(store);

    if (!allBooksData || !allBooksData.length) {
        console.log("Books Data Empty. Fetching Now before Adding a new book");
        await dispatch(getAllBooksDataThunk());
        store = getState();
        allBooksData = getAllBooksData(store);
        console.log("Books Data Fetched. Now We Will Add a new book");
    }

    const bookObj = {
        title: bookData.bookName,
        caption: bookData.bookCaption,
        authorName: bookData.author,
        bookSeriesName: bookData.seriesName
    };
    let maxBookId = 0;
    debugger;
    const matchedBookName = allBooksData.find(book => (bookObj.title || '').toLowerCase() === (book.title || '').toLowerCase());
    if (matchedBookName) {
        dispatch(setAddNewBookErrorAction("Book Name Already Exists"));
        return;
    }
    allBooksData.forEach(book => maxBookId = Math.max(maxBookId, book.bookId));
    bookObj.bookId = maxBookId + 1;

    const matchedBook = allBooksData.find(book => bookObj.bookSeriesName && (bookObj.bookSeriesName || '').toLowerCase() === (book.bookSeriesName || '').toLowerCase());
    if (matchedBook) {
        bookObj.bookSeriesId = matchedBook.bookSeriesId;
        bookObj.authorName = matchedBook.authorName;
        bookObj.authorId = matchedBook.authorId;
    } else {
        // Come here if book series doesn't match
        bookObj.bookSeriesId = bookObj.bookSeriesName ? bookObj.bookSeriesName.split(" ").join("#") : undefined;

        const matchedAuthor = allBooksData.find(book => (bookObj.authorName || '').toLowerCase() === (book.authorName || '').toLowerCase());

        if (matchedAuthor) {
            bookObj.authorName = matchedAuthor.authorName;
            bookObj.authorId = matchedAuthor.authorId;
        } else {
            bookObj.authorId = bookObj.authorName.split(" ").join("#")
        }
    }

    // Dispatch an action
    dispatch(addNewBookAction(bookObj));
    history.push("/library");
}