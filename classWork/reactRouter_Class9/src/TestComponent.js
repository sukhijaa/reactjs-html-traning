import React from "react";

// Should only be used on leaf component - Which do not have any other child component
export default class TestComponent extends React.PureComponent {
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