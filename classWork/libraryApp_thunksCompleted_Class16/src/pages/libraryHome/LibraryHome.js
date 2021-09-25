import React from 'react';
import './LibraryHome.css';
import LibraryGroup from "./LibraryGroup";
import {connect} from "react-redux";
import {testerThunk} from "./libraryThunks";
import {getBooksGroupingTypeSelector} from "../../store/reducers/bookReducer/bookSelectors";
import {setBooksGroupingTypeAction} from "../../store/reducers/bookReducer/bookActions";

const mapStateToProps = (store) => {
    return {
        booksData: store.booksData.allBooks,
        myCustomProp: "My Custom Value",
        groupingType: getBooksGroupingTypeSelector(store)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        testerAction: () => dispatch({type: "app/TESTER"}),
        testerThunk: (data) => dispatch(testerThunk(data)),
        setGroupingType: (newType) => dispatch(setBooksGroupingTypeAction(newType))
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class LibraryHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.testerAction();
        // this.props.testerThunk("My Custom Data");
        // this.props.dispatch({type: "app/TESTER"});
    }

    handleRadioButtonChange = (e) => {
        const {target} = e;
        this.props.setGroupingType(target.name);
    };

    handleAddNewBook = () => {
        this.props.history.push("/library/new");
    };

    render() {
        const {groupingType} = this.props;
        return (
            <div className={"library-wrapper"}>
                <div className={"library-header-wrapper"}>
                    <h1>Welcome to My Library</h1>
                </div>
                <div className={"library-controls-wrapper"}>
                    <span className={"control-label"}>Group Items By:</span>
                    <input type={"radio"} name={"books"} id={"booksRadio"} checked={groupingType === "books"}
                           onChange={this.handleRadioButtonChange}/>
                    <label htmlFor={"booksRadio"}>Books</label>
                    <input type={"radio"} name={"author"} id={"authorRadio"}
                           checked={groupingType === "author"} onChange={this.handleRadioButtonChange}/>
                    <label htmlFor={"authorRadio"}>Author</label>
                </div>
                <div className={"library-controls-wrapper"} onClick={this.handleAddNewBook}>
                    Add A New Book
                </div>
                <div className={"library-data-wrapper"}>
                    <LibraryGroup/>
                </div>
            </div>
        )
    }
}

export default LibraryHome;