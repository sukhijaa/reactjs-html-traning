/**
 * MVC Framework
 * MVC : Model, View, Controller
 *
 *  Model: How your data is structured and how it is stored
 *  View: How it is shown to the user and how it accepts the various action from the user
 *  Controller: Bridge between dataModel and View.
 *
 *  In  Redux Ecosystem
 *  Model: Known as store. It simply houses your data
 *  View: Redux doesn't concern the view layer
 *  Controller:
 *      get the data: Data Fetching from Store
 *      add/update the data: View triggers an ACTION (button click by user etc) and it will be REDUCED to a store update by a REDUCER
 *
 *
 *
 *  In Redux World
 *  User PErforms some event (button click) ->
 *      Action is dispatched (basically a function call) ->
 *          Relevant Reducer picks up this action ->
 *              Reducer Updates the store ->
 *                  Entire App Refreshes ->
 *                      Views will go to store again to get the latest data
 *
 */


export const BOOK_MASTER = [
    {
        title: "Harry Potter and Sorcerer's Stone",
        caption: "Harry Potter Part 1",
        bookId: 1,
        bookSeriesId: "harryPotter",
        bookSeriesName: "Harry Potter",
        authorId: "author1",
        authorName: "JK Rowling"
    },
    {
        title: "Harry Potter and Chamber of Secrets",
        caption: "Harry Potter Part 2",
        bookId: 2,
        bookSeriesId: "harryPotter",
        bookSeriesName: "Harry Potter",
        authorId: "author1",
        authorName: "JK Rowling"
    },
    {
        title: "Monk Who sold His Ferrari",
        caption: "Monk who sells",
        bookId: 3,
        bookSeriesId: "monk",
        bookSeriesName: "Motivation Epilogue",
        authorId: "author2",
        authorName: "Robin Sharma"
    },
    {
        title: "Fantastic Beasts and Where to Find Them",
        caption: "Summary of Large Beasts - Part 1",
        bookId: 4,
        bookSeriesId: "fantasticBeasts",
        bookSeriesName: "Fantastic Beasts",
        authorId: "author1",
        authorName: "JK Rowling"
    },
    {
        title: "Fantastic Beasts and Crimes of Grindelwald",
        caption: "Summary of Large Beasts - Part 2",
        bookId: 5,
        bookSeriesId: "fantasticBeasts",
        bookSeriesName: "Fantastic Beasts",
        authorId: "author1",
        authorName: "JK Rowling"
    }
];



export const addNewBook = (bookData) => {
  const bookObj = {
      title: bookData.bookName,
      caption: bookData.bookCaption,
      authorName: bookData.author,
      bookSeriesName: bookData.seriesName
  };
  let maxBookId = 0;
  const matchedBookName = BOOK_MASTER.find(book => (bookObj.title || '').toLowerCase() === (book.title || '').toLowerCase());
  if (matchedBookName) {
      console.error("Book Name Already Exists");
      return "Book Name Already Exists";
  }
  BOOK_MASTER.forEach(book => maxBookId = Math.max(maxBookId, book.bookId));
  bookObj.bookId = maxBookId + 1;

  const matchedBook = BOOK_MASTER.find(book => bookObj.bookSeriesName && (bookObj.bookSeriesName || '').toLowerCase() === (book.bookSeriesName || '').toLowerCase());
  if (matchedBook) {
      bookObj.bookSeriesId = matchedBook.bookSeriesId;
      bookObj.authorName = matchedBook.authorName;
      bookObj.authorId = matchedBook.authorId;
  } else {
      // Come here if book series doesn't match
      bookObj.bookSeriesId = bookObj.bookSeriesName ? bookObj.bookSeriesName.split(" ").join("#") : undefined;

      const matchedAuthor = BOOK_MASTER.find(book => (bookObj.authorName || '').toLowerCase() === (book.authorName || '').toLowerCase());

      if (matchedAuthor) {
          bookObj.authorName = matchedAuthor.authorName;
          bookObj.authorId = matchedAuthor.authorId;
      } else {
          bookObj.authorId = bookObj.authorName.split(" ").join("#")
      }
  }

  BOOK_MASTER.push(bookObj);

};