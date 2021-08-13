import React from 'react';
import {TODO_APP_DATA} from "../../utils";

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
            todoTileDetails: null
        };

        console.log("I am in constructor");
    }

    componentDidMount() {
        const tileDetails = TODO_APP_DATA.find(todoItem => todoItem.id === this.state.tileId);

        if (!tileDetails) {
            this.props.history.push("/todo");
        } else {
            this.setState({todoTileDetails: tileDetails});
        }
        console.log("I am in componentDidMount");
    }

    static getDerivedStateFromProps () {
        console.log("I am in getDerivedStateFromProps");
        return {};
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("inside shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.tileId !== prevState.tileId) {
            const tileDetails = TODO_APP_DATA.find(todoItem => todoItem.id === this.state.tileId);
            if (!tileDetails) {
                this.props.history.push("/todo");
            } else {
                this.setState({todoTileDetails: tileDetails});
            }
        }

        console.log("inside componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Inside componentWillUnmount");
    }

    handleReRenderClick = () => {
        this.setState({
            tileId: this.state.tileId + 1
        });
    };

    render() {
        console.log("Inside Render");
        // While structuring object - Left of colon becomes name of the variable and right becomes its value
        // const a = {
        //    "stateDetails": "details"
        // };

        if (!this.state.todoTileDetails) {
            // this.props.history.push("/");
            return <h1 onClick={this.handleReRenderClick}>Click Me To ReRender</h1>;
        }

        // Destructuring the object - Left of the colon becomes value and right becomes variable name
        const {details: stateDetails, description, id} = this.state.todoTileDetails;
        // Not using myRandomVariable because during refresh, only loction.state is persisted by the browser
        // const {details: randomDetails} = myRandomVariable;
        //
        // console.log(this.props.location.state);
        // console.log(this.props.location.myRandomVariable);
        return (
            <div>
                <h1 onClick={this.handleReRenderClick}>Click Me To ReRender</h1>
                <h1>
                    {description}
                </h1>
                <ul>
                    {
                        stateDetails.map((detailStr, index) => <li key={index}>{detailStr}</li>)
                    }
                </ul>
                {/*<h2>*/}
                {/*    {randomDetails}*/}
                {/*</h2>*/}
            </div>
        );
    }
}

export default TodoDetails;