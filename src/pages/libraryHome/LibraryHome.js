import React from 'react';
import './LibraryHome.css';
import LibraryGroup from "./LibraryGroup";

class LibraryHome extends React.Component {
    state = {
        checkedRadio: "books",
    };

    constructor(props) {
        super(props);
    }

    handleRadioButtonChange = (e) => {
        const {target} = e;
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