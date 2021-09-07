const initialState = {
    books: {
        allBooks: [
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
        ]
    }
};

const bookReducer = (state = initialState, action) => {
    // console.log("Action recieved for booksReducer", action, state);
    const newStore = {...state, newState: action.type};
    return newStore;
};

export default bookReducer;