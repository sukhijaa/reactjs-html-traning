import React, {Component} from "react";
import TodoTile from "./TodoTile";
import "./TodoApp.css";

export default class TodoApp extends Component {

    state = {
        todoItems: [
            {
                initials: "G",
                description: "Groceries",
                id: 0
            },
            {
                initials: "BP",
                description: "Bill Payments",
                id: 1
            },
            {
                initials: "E",
                description: "Exercises",
                id: 2
            }
        ]
    };

    todoItems = [
        <TodoTile initials={"G"} description={"Groceries"} id={0}/>,
        <TodoTile initials={"BP"} description={"Bill Payments"} id={1}/>,
        <TodoTile initials={"E"} description={"Exercise"} id={2}/>
    ];

    constructor(props) {
        super(props);

        // Work around for normal function
        this.createTodo = this.createTodoHandlerNormal.bind(this);
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

    createTodoHandlerNormal = function() {
        console.log("Creating a ToDo", this);
    };

    // Long hand of map function
    getTilesArray = () => {
        const newArray = [];
        for (let i = 0; i< this.state.todoItems.length; i++) {
            const todoitemObj = this.state.todoItems[i];
            // newArray.push(<TodoTile key={todoitemObj.id} initials={todoitemObj.initials} description={todoitemObj.description} onDelete={() => this.handleTileDelete(i)}/>);
            newArray.push(<TodoTile key={todoitemObj.id} id={todoitemObj.id} initials={todoitemObj.initials} description={todoitemObj.description} onDelete={this.handleTileDelete}/>);
        }
        return newArray;
    };

    handleTileDelete = (id) => {
        const currentTodoElements = [...this.state.todoItems];
        const index = currentTodoElements.findIndex(todoObj => todoObj.id === id);
        if (index === -1)  {
            return;
        }
        currentTodoElements.splice(index, 1);
        this.setState({todoItems: currentTodoElements});
    };

    render() {
        return (
            <div className={"todo-app-wrapper"}>
                <div className={"todo-header"}>
                    <h1>Welcome to ToDo App</h1>
                    <h3>Manage all your deliverable easily</h3>
                </div>
                <div className={"create-todo"} onClick={this.createTodoHandlerNormal}>Create New</div>
                <div className={"todo-tiles-wrapper"}>
                    {/*{this.todoItems[0]}*/}
                    {/*{this.todoItems[1]}*/}
                    {/*{this.todoItems[2]}*/}
                    {/*{this.todoItems}*/}
                    {
                        this.getTilesArray()
                    }
                    {/*{*/}
                    {/*    this.state.todoItems.map(todoItem => {*/}
                    {/*        return <TodoTile initials={todoItem.initials} description={todoItem.description}/>;*/}
                    {/*    })*/}
                    {/*}*/}
                    {/*<TodoTile initials={"G"} description={"Groceries"}/>*/}
                    {/*<TodoTile initials={"BP"} description={"Bill Payments"}/>*/}
                    {/*<TodoTile initials={"E"} description={"Exercise"}/>*/}
                    {/*<TodoTile initials={"NTD"} description={"New ToDo"}/>*/}
                    {/*<TodoTile initials={"NTD"} description={"New ToDo"}/>*/}
                    <TodoTile initials={"+"} description={"Add New ToDo"} type={'New'} onClick={this.createTodo} id={-1}/>
                    <TodoTile initials={"+"} description={"Add New ToDo"} type={'New'} onClick={this.createTodoHandler} id={-2}/>
                </div>
            </div>
        );
    }
}