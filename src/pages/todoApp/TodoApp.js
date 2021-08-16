import React, {Component} from "react";
import TodoTile from "./TodoTile";
import "./TodoApp.css";
import {connect} from "react-redux";

@connect((store) => {
    console.log(store);
    return {
        mConnectedProp: "My Connected OProp",
        todoItems: store.todoData
    };
})
class TodoApp extends Component {

    state = {
        todoItems: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({todoItems: this.props.todoItems})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.todoItems !== this.props.todoItems) {
            this.setState({todoItems: this.props.todoItems})
        }
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
        this.setState({todoItems: currentTodoElements});
    };

    handleTileDelete = (id) => {
        const currentTodoElements = [...this.state.todoItems];
        const index = currentTodoElements.findIndex(todoObj => todoObj.id === id);
        if (index === -1) {
            return;
        }
        currentTodoElements.splice(index, 1);
        this.setState({todoItems: currentTodoElements});
    };

    handleTileClick = (id) => {
        const clickedTile = this.state.todoItems.find(todoItem => todoItem.id === id);

        if (clickedTile) {
            this.props.history.push({
                pathname: "/todo/details",
                state: id
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


export default TodoApp;