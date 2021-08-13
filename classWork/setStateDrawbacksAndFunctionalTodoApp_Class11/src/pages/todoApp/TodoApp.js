import React, {Component} from "react";
import TodoTile from "./TodoTile";
import "./TodoApp.css";
import {TODO_APP_DATA} from "../../utils";

export default class TodoApp extends Component {

    state = {
        todoItems: TODO_APP_DATA
    };

    constructor(props) {
        super(props);
    }

    createTodoHandler = () => {
        const currentTodoElements = [...this.state.todoItems];

        let largestNameNumber = 0;
        let largestId = 1;

        currentTodoElements.forEach(tileObj => {
            const {description} = tileObj;
            largestId = Math.max(largestId, tileObj.id);
            if (description.startsWith("New ToDo Element")) {
                const splits = description.split(" ");
                const number = splits[splits.length - 1];
                const intNumber = parseInt(number);
                largestNameNumber = Math.max(largestNameNumber, intNumber);
            }
        });

        const newElement = {
            initials: 'NTD',
            description: 'New ToDo Element ' + (largestNameNumber + 1),
            id: largestId + 1
        };
        currentTodoElements.push(newElement);
        // setTimeout(() => {
        //     this.setState({todoItems: currentTodoElements});
        // }, 5000);
        this.setState({todoItems: currentTodoElements});

        // Original
        // this.setState({todoItems: currentTodoElements});

        // SetState Async example
        // this.setState({todoItems: currentTodoElements}, () => {
        //     console.log("Set state completed in create handler. ", this.state.todoItems);
        // });
        // console.log('Stateful todoItems at end of tileClickHandler', this.state.todoItems);
        // console.log('New to-be-state todoItems at tileClickHandler', currentTodoElements);
    };

    handleTileDelete = (id) => {
        const currentTodoElements = [...this.state.todoItems];
        const index = currentTodoElements.findIndex(todoObj => todoObj.id === id);
        if (index === -1) {
            return;
        }
        currentTodoElements.splice(index, 1);
        // setTimeout(() => {
        //     this.setState({todoItems: currentTodoElements});
        // }, 5000);

        // Original
        this.setState({todoItems: currentTodoElements});

        // Set State async demonstrator
        // this.setState({todoItems: currentTodoElements});
        // console.log('Stateful todoItems', this.state.todoItems);
        // console.log('New to-be-state todoItems', currentTodoElements);
    };

    handleTileClick = (id) => {
        // if (id < 1) {
        //     this.props.history.push("/todo/details");
        // } else {
        //     // setTimeout(() => {
        //     //     this.createTodoHandler();
        //     // }, 5000);
        //     this.createTodoHandler();
        // }

        // For simple navigation without passing any data
        // this.props.history.push("/todo/details");

        // To pass some data
        const clickedTile = this.state.todoItems.find(todoItem => todoItem.id === id);

        if (clickedTile) {
            this.props.history.push({
                pathname: "/todo/details",
                state: id,
                // Not recommended to pass data in anything other than state - Because only state is persisted during refresh
                myRandomVariable: {details: "I am from random var. My Id - " + id},
            })
        }

    };

    render() {
        return (
            <div className={"todo-app-wrapper"}>
                <div className={"todo-header"}>
                    <h1>Welcome to ToDo App</h1>
                    <h3>Manage all your deliverable easily</h3>
                </div>
                <div className={"todo-tiles-wrapper"}>
                    {
                        this.state.todoItems.map(todoitemObj => {
                            return <TodoTile key={todoitemObj.id}
                                             id={todoitemObj.id}
                                             initials={todoitemObj.initials}
                                             description={todoitemObj.description}
                                             onTileClick={this.handleTileClick}
                                             onDelete={this.handleTileDelete}/>;
                        })
                    }
                    <TodoTile initials={"+"} description={"Add New ToDo"} type={'New'} onCreateButtonClick={this.createTodoHandler}
                              id={-2}/>
                </div>
            </div>
        );
    }
}