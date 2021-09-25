import React from 'react';
import "./TodoDetails.css";
import NavButton from "./NavButton";
import {connect} from "react-redux";
import {TODO_APP_DATA} from "../../utils";

const doNothing = () => null;

class TodoDetails extends React.Component {

    // Lifecycle methods

    // Mounting Phase - When components is getting rendered for the first time on a certain page

    //      constructor - Variable and state initialization should happen here
    //      render - Whatever needs to be printed on browser/DOM should be returned from here. No state change or data change happens here
    //      componentDidMount - After component has mounted - Everything which you need to do after component is mounted on DOM - API calls, DOM manipulation, Event Listeners etc

    // Updating Phase - When component re-renders (Either when parent re-renders, or prop changes or state changes)

    //      static getDerivedStateFromProps - Not to be used - You can analyse the new props here and return a new state object
    //      shouldComponentUpdate - If it returns true, component re-renders otherwise it doesn't re-render or update
    //      componentDidUpdate - After component has re-rendered

    // Unmounting Phase -  when component is getting removed from the DOM i.e. when its not needed on the page anymore.

    //      componentWillUnmount - When component is getting unmounted - Event listeners, intervals etc should be removed here to avoid memory leak.

    constructor(props) {
        super(props);

        const {location} = props;
        const {state: tileId} = location;

        this.state = {
            tileId,
            todoTileDetails: null,
            freezeButton: false,
            formData: "No Data Yet"
        };
    }

    componentDidMount() {
        const {location} = this.props;
        const {state: tileId} = location;

        const tileDetails = this.props.todoItems.find(todoItem => todoItem.id === this.state.tileId);

        if (!tileDetails) {
            this.props.history.push("/todo");
        } else {
            this.setState({todoTileDetails: tileDetails, formData: tileDetails.description});
        }
    }

    static getDerivedStateFromProps () {
        return {};
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.tileId !== prevState.tileId) {
            const tileDetails = this.props.todoItems.find(todoItem => todoItem.id === this.state.tileId);
            if (!tileDetails) {
                this.props.history.push("/todo");
            } else {
                this.setState({todoTileDetails: tileDetails, formData: tileDetails.description});
            }
        }
    }

    componentWillUnmount() {
    }

    handleNext = () => {
        this.setState({freezeButton: true});
        setTimeout(() => {
            this.setState({
                tileId: this.state.tileId + 1,
                freezeButton: false
            });
        }, 1000);
    };

    handlePrevious = () => {
        this.setState({freezeButton: true});
        setTimeout(() => {
            this.setState({
                tileId: this.state.tileId - 1,
                freezeButton: false
            });
        }, 1000);
    };

    handleTitleChange = (e) => {
        const newTitle = e.target.value;
        console.log("New Title", newTitle);
        const currentTodoTileDetails = {...this.state.todoTileDetails};
        currentTodoTileDetails.description = newTitle;
        this.setState({todoTileDetails: currentTodoTileDetails});

        // Need to update TODO_APP_DATA so that TodoApp.js knows about updates
        const tileInMasterData = this.props.todoItems.findIndex(tile => tile.id === currentTodoTileDetails.id);
        this.props.todoItems[tileInMasterData] = currentTodoTileDetails;
    };

    handleInputChange = (e) => {
        const newValue = e.target.value;
        this.setState({formData: newValue});
    };

    render() {
        if (!this.state.todoTileDetails) {
            return <h1>Loading</h1>
        }

        const isLastEntry = this.props.todoItems.findIndex(todoItem => todoItem.id === this.state.tileId) === (this.props.todoItems.length - 1);
        const isFirstEntry = this.props.todoItems.findIndex(todoItem => todoItem.id === this.state.tileId) === 0;


        const {details: stateDetails, description, id} = this.state.todoTileDetails;
        return (
            <div className={"todo-details-wrapper"}>
                <div className={"todo-details-navigators"}>
                    <NavButton onClickHandler={this.handlePrevious} disabled={isFirstEntry || this.state.freezeButton} loading={this.state.freezeButton}>
                        <h3>Previous</h3>
                    </NavButton>
                    &nbsp;
                    <NavButton onClickHandler={this.handleNext} disabled={isLastEntry || this.state.freezeButton}>
                        <h3>Next</h3>
                    </NavButton>
                </div>
                <h1 className={"todo-tile-description"}>
                    <input value={this.state.formData} onChange={this.handleInputChange} onBlur={this.handleTitleChange}/>
                </h1>
                <ul>
                    {
                        stateDetails.map((detailStr, index) => <li key={index}>{detailStr}</li>)
                    }
                </ul>
            </div>
        );
    }
}

TodoDetails.defaultProps = {
    todoItems: TODO_APP_DATA,
};

export default TodoDetails;