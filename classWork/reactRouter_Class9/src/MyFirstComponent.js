import React from "react";
import TestComponent from "./TestComponent";

export default class MyFirstComponent extends React.Component {
    constructor(props) {
        super(props);

        console.log("MyFrstComponent", props);
    }

    state = {
        counts: 0,
        someOtherVal: "Abhishek"
    };

    clickHandler = (e) => {
        this.setState({counts: (this.state.counts + 1) % 2});
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate Called ", this.props.name);
        if (this.state.counts !== nextState.counts || this.props !== nextProps) {
            return true;
        }
        return false;
    }

    render() {
        // this is a syntactical sugar known as object destructuring
        const {name: nameConst, age: ageConst, dob: dobConst, type: typeConst, testCompRedndered: TestCompRendered, testCompProps: testCompProps} = this.props; // {name: "Abhishek", age: 26, dob: new Date()}

        // nameConst is same as nameVar
        const nameVar = this.props.name;

        // typeConst is same as nameVar
        const typeVar = this.props.type;


        console.log("Re-rendering - ", typeVar);
        return (
            <div name={"FirstComponent"}>
                My {typeConst} Component
                <ul>
                    <li>Name : {nameVar}</li>
                    <li>Age : {ageConst}</li>
                    <li>Date Of Birth: {dobConst.toString()}</li>
                </ul>
                <div onClick={this.clickHandler}>Click Me - {this.state.counts}</div>
                {/*{TestCompRendered}*/}
                <TestComponent {...testCompProps}/>
            </div>
        );
    }
}