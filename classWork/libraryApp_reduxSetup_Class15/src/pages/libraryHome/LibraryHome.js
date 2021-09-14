import React from 'react';
import './LibraryHome.css';
import LibraryGroup from "./LibraryGroup";
import {connect} from "react-redux";
import {testerThunk} from "./libraryThunks";

const mapStateToProps = (store) => {
    return {
        booksData: store.booksData.books,
        myCustomProp: "My Custom Value"
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        testerAction: () => dispatch({type: "app/TESTER"}),
        testerThunk: (data) => dispatch(testerThunk(data))
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class LibraryHome extends React.Component {
    state = {
        checkedRadio: "books",
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
        this.props.testerAction();
        // this.props.testerThunk("My Custom Data");
        // this.props.dispatch({type: "app/TESTER"});
        console.log("My Action Dispatched");
    }

    handleRadioButtonChange = (e) => {
        const {target} = e;
        this.setState({checkedRadio: target.name});
    };

    handleAddNewBook = () => {
        this.props.history.push("/library/new");
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
                <div className={"library-controls-wrapper"} onClick={this.handleAddNewBook}>
                    Add A New Book
                </div>
                <div className={"library-data-wrapper"}>
                    <LibraryGroup groupingType={this.state.checkedRadio}/>
                </div>
            </div>
        )
    }
}

export default LibraryHome;