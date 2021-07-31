import React from 'react';
import ReactDOM from 'react-dom';

// Should only be used on leaf component - Which do not have any other child component
class TestComponent extends React.PureComponent {
    state = {
        counts: 0
    };

    clickHandler = (e) => {
        this.setState({counts: this.state.counts + 1});
    };

    // Basic Implementation of shouldComponentUpdate that every component will eventually have
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (nextProps !== this.props || nextState !== this.state || nextContext !== this.context) {
    //         return true;
    //     }
    //
    //     return false;
    // }

    render() {
        console.log("Test Component Rerendering " + this.props.name);
        return (
            <div>
                <br/>
                I am a new component from {this.props.name}
                <div onClick={this.clickHandler}>Test Clicks - {this.state.counts}</div>
                <br/>
                <br/>
            </div>
        );
    }
}

class MyFirstComponent extends React.Component {
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

class WrapperComponent extends React.Component {
    constructor(props) {
        super(props);

        this.firstDob = new Date();
        this.secondDob = new Date();
        this.firstchildProps = {name: "First Comp Props - I was rendered by FirstComponent"};
        this.secondChildProps = {name: "First Comp Props - I was rendered by SecondComponent"};

        // Not recommended - Only Variable
        setTimeout(() => {
            console.log("Updating Wrapper");
            this.firstchildProps.name += "Re-Renderedredered";
            this.secondChildProps = {...this.secondChildProps};
            this.setState({});
        }, 2000);
    }

    render() {
        console.log("Wrapper component");

        return (
            <React.Fragment>
                <MyFirstComponent type={"First"} name={"Abhishek"} age={26} dob={this.firstDob}
                    // testCompRedndered={<TestComponent name={"First. I was rendered by Wrapper"}/>}
                                  testCompProps={this.firstchildProps}/>
                <MyFirstComponent type={"Second"} name={"Sukhija"} age={500} dob={this.secondDob}
                    // testCompRedndered={<TestComponent name={"Second. O was redndered by Wrapper"}/>}
                                  testCompProps={this.secondChildProps}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<WrapperComponent/>, document.getElementById("root"));

// ReactDOM.render(<MyFirstComponent type={"Second"} name={"Sukhija"} age={500} dob={new Date()} testComp={<TestComponent name={"Second"}/>}/>, document.getElementById("root2"));