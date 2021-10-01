import React from 'react';
import ShowForRoles from "../../hocs/ShowForRoles";

class AddBookButton extends React.Component {

    render() {
        return (
            <div className={"library-controls-wrapper"} onClick={this.props.handleAddNewBook}>
                Add A New Book
            </div>
        )
    }
}

export default ShowForRoles(AddBookButton, ["ADMIN"]);