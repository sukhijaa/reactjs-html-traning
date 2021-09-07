import React from 'react';
import './AddNewPage.css';
import {addNewBook} from "../../utils";

class AddNewPage extends React.Component {
    state = {
        formState: {
            bookName: "My New Book",
            bookCaption: "This is a very good book",
            seriesName: "My First Series",
            author: "I Me Myself"
        },
        error: ""
    };

    handleDataChange = (e) => {
        const {target} = e;
        const {name, value} = target;
        const newFormState = {...this.state.formState, [name]: value};
        this.setState({formState: newFormState});
        this.setState({error: ""});
    };

    handleAddNewBook = () => {
        const {formState} = this.state;
        if (!formState.bookName || !formState.bookCaption || !formState.seriesName || !formState.author) {
            this.setState({error: "All fields are mandatory"});
            return;
        }
        const error = addNewBook(this.state.formState);
        if (error) {
            this.setState({error});
            return;
        }
        this.props.history.push("/library");
    };

    render() {
        const {formState} = this.state;

        return (
            <div className={"library-add-new-wrapper"}>
                <div className={"add-new-header-wrapper"}>
                    <h1>Please fill in the details to add a new book</h1>
                </div>
                <div className={"add-new-body-wrapper"}>
                    <div className={"add-new-body-element"}>
                        <label htmlFor={"bookName"}>Enter Name of Book</label>
                        <input type={"text"} id={"bookName"} name={"bookName"} onChange={this.handleDataChange} value={formState.bookName}/>
                    </div>
                    <div className={"add-new-body-element"}>
                        <label htmlFor={"bookCaption"}>Enter Small Description About the Book</label>
                        <input type={"text"} id={"bookCaption"} name={"bookCaption"} onChange={this.handleDataChange} value={formState.bookCaption}/>
                    </div>
                    <div className={"add-new-body-element"}>
                        <label htmlFor={"bookSeries"}>Enter Book Series Name</label>
                        <input type={"text"} id={"bookSeries"} name={"seriesName"} onChange={this.handleDataChange} value={formState.seriesName}/>
                    </div>
                    <div className={"add-new-body-element"}>
                        <label htmlFor={"author"}>Enter Author Name</label>
                        <input type={"text"} id={"author"} name={"author"} onChange={this.handleDataChange} value={formState.author}/>
                    </div>
                    <div className={"add-new-body-error"}>
                        {this.state.error}
                    </div>
                </div>
                <div className={"add-new-footer-wrapper"}>
                    <h3 onClick={this.handleAddNewBook}>Create New Book</h3>
                </div>
            </div>
        );
    }
}

export default AddNewPage;