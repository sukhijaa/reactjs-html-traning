import React from 'react';
import PropTypes from 'prop-types';
import './LibraryHome.css';
import LineItem from "./LineItem";
import {getAllBooksData, getBooksGroupingTypeSelector} from "../../store/reducers/bookReducer/bookSelectors";
import {connect} from "react-redux";
import {getAllBooksDataThunk, testerThunk} from "./libraryThunks";
import {setBooksGroupingTypeAction} from "../../store/reducers/bookReducer/bookActions";

const mapStateToProps = (store) => ({
    booksData: getAllBooksData(store),
    groupingType: getBooksGroupingTypeSelector(store)
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooksData: () => dispatch(getAllBooksDataThunk())
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class LibraryGroup extends React.PureComponent {

    state = {
        groupedData: []
    };

    componentDidMount() {
        this.props.fetchBooksData();

        this.handleGrouping();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.groupingType !== this.props.groupingType) {
            this.handleGrouping();
        }

        if (this.props.booksData !== prevProps.booksData) {
            this.handleGrouping();
        }
    }

    handleGroupingByBooks = () => {
        // Handle Grouping by Books
        // const groupedByBooks = [
        //     {
        //         title: "Series Name",
        //         caption: "Author Name",
        //         items: [
        //             // ACTUAL BOOK ITEM
        //         ]
        //     }
        // ]

        const groupedBooks = {};
        const {booksData} = this.props;
        booksData.forEach(book => {
            const {bookSeriesId, authorName, bookSeriesName} = book;
            if (groupedBooks[bookSeriesId]) {
                const groupObj = groupedBooks[bookSeriesId];
                groupObj.items.push(book);
            } else {
                const groupObj = {
                    title: bookSeriesName,
                    caption: `Author: ${authorName}`,
                    items: [book]
                };
                groupedBooks[bookSeriesId] = groupObj;
            }
        });
        this.setState({groupedData: Object.values(groupedBooks)})
    };

    handleGroupingByAuthor = () => {
        // Handle Grouping by Author
        // const groupedByAuthor = [
        //     {
        //         title: "Author Name",
        //         caption: "Number of Books",
        //         items: [
        //             // ACTUAL BOOK ITEM
        //         ]
        //     }
        // ]

        const groupedAuthors = {};
        const {booksData} = this.props;
        booksData.forEach(book => {
            const {authorName, authorId} = book;

            if (groupedAuthors[authorId]) {
                const groupedData = groupedAuthors[authorId];
                groupedData.items.push(book);
                groupedData.caption = `Books Published: ${groupedData.items.length}`
            } else {
                groupedAuthors[authorId] = {
                    title: authorName,
                    caption: "Books Published: 1",
                    items: [book]
                }
            }
        });
        this.setState({groupedData: Object.values(groupedAuthors)})
    };

    handleGrouping = () => {
        if (this.props.groupingType === "books") {
            this.handleGroupingByBooks();
        } else {
            this.handleGroupingByAuthor();
        }
    };

    render() {
        const {groupedData} = this.state;
        if (!groupedData || groupedData.length === 0) {
            return <div>Loading...</div>;
        }
        return (
            <React.Fragment>
                {
                    groupedData.map((groupItem, index) => {
                        const {title, caption, items} = groupItem;
                        return (
                            <LineItem key={index} title={title} caption={caption}>
                                {
                                    (items || []).map(bookObj => <LineItem key={bookObj.bookId} title={bookObj.title}
                                                                           caption={bookObj.caption}/>)
                                }
                            </LineItem>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

LibraryGroup.propTypes = {
    groupingType: PropTypes.string.isRequired
};

export default LibraryGroup;