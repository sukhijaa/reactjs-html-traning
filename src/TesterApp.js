import React from 'react';

class InternalComponent extends React.PureComponent {

    // Same as PureComponent Effective Implementation
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (this.props.name !== nextProps.name) {
    //         return true;
    //     } else if (this.props.currentTime !== nextProps.currentTime) {
    //         return true
    //     }
    //
    //     return false;
    // }

    render() {
        console.log("Internal Component Render - ", this.props.name);
        return (
            <div>I am internal component - {this.props.name}
            <div>
                Current Time - {this.props.currentTime.toString()}
            </div>
                <br/>
                <br/>
            </div>
        );
    }
}

export class TesterApp extends React.Component {

    constructor(props) {
        super(props);

        this.secondTime = new Date();

        setTimeout(() => {
            this.setState({});
        }, 2000);
    }

    render() {
        return(
            <div>
                I am Tester App
                <br/>
                <br/>
                <InternalComponent name={"First"} currentTime={new Date()}/>
                <InternalComponent name={"Second"} currentTime={this.secondTime}/>
            </div>
        )
    }
}