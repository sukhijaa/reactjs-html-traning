import React from 'react';
import './LibraryHome.css';
import LibraryGroup from "./LibraryGroup";

class LibraryHome extends React.Component {
    state = {
        checkedRadio: "books",
        // groupedData: []
    };

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.handleGrouping();
    // }

    // handleGroupingByBooks = () => {
    //     // Handle Grouping by Books
    //     // const groupedByBooks = [
    //     //     {
    //     //         title: "Series Name",
    //     //         caption: "Author Name",
    //     //         items: [
    //     //             // ACTUAL BOOK ITEM
    //     //         ]
    //     //     }
    //     // ]
    //
    //     const groupedBooks = {};
    //     BOOK_MASTER.forEach(book => {
    //         const {bookSeriesId, authorName, bookSeriesName} = book;
    //         if (groupedBooks[bookSeriesId]) {
    //             const groupObj = groupedBooks[bookSeriesId];
    //             groupObj.items.push(book);
    //         } else {
    //             const groupObj = {
    //                 title: bookSeriesName,
    //                 caption: `Author: ${authorName}`,
    //                 items: [book]
    //             };
    //             groupedBooks[bookSeriesId] = groupObj;
    //         }
    //     });
    //     this.setState({groupedData: Object.values(groupedBooks)})
    // };
    //
    // handleGroupingByAuthor = () => {
    //     // Handle Grouping by Author
    //     // const groupedByAuthor = [
    //     //     {
    //     //         title: "Author Name",
    //     //         caption: "Number of Books",
    //     //         items: [
    //     //             // ACTUAL BOOK ITEM
    //     //         ]
    //     //     }
    //     // ]
    //
    //     const groupedAuthors = {};
    //     BOOK_MASTER.forEach(book => {
    //         const {authorName, authorId} = book;
    //
    //         if (groupedAuthors[authorId]) {
    //             const groupedData = groupedAuthors[authorId];
    //             groupedData.items.push(book);
    //             groupedData.caption = `Books Published: ${groupedData.items.length}`
    //         } else {
    //             groupedAuthors[authorId] = {
    //                 title: authorName,
    //                 caption: "Books Published: 1",
    //                 items: [book]
    //             }
    //         }
    //     });
    //     this.setState({groupedData: Object.values(groupedAuthors)})
    // };
    //
    // handleGrouping = () => {
    //   if (this.state.checkedRadio === "books") {
    //       this.handleGroupingByBooks();
    //   } else {
    //       this.handleGroupingByAuthor();
    //   }
    // };

    handleRadioButtonChange = (e) => {
        const {target} = e;
        // this.setState({checkedRadio: target.name}, this.handleGrouping);
        this.setState({checkedRadio: target.name});
    };

    render() {
        return (
            <div className={"library-wrapper"}>
                <div className={"library-header-wrapper"}>
                    <h1>Welcome to My Library</h1>
                </div>
                <div className={"library-controls-wrapper"}>
                    <span className={"control-label"}>Group Items By:</span>
                    <input type={"radio"} name={"books"} id={"booksRadio"} checked={this.state.checkedRadio === "books"}
                           onChange={this.handleRadioButtonChange}/>
                    <label htmlFor={"booksRadio"}>Books</label>
                    <input type={"radio"} name={"author"} id={"authorRadio"}
                           checked={this.state.checkedRadio === "author"} onChange={this.handleRadioButtonChange}/>
                    <label htmlFor={"authorRadio"}>Author</label>
                </div>
                <div className={"library-data-wrapper"}>
                    <LibraryGroup groupingType={this.state.checkedRadio}/>
                </div>
            </div>
        )
    }
}

export default LibraryHome;