import React from 'react';
import PropTypes from 'prop-types';
import './LibraryHome.css';

class LineItem extends React.PureComponent {

    // This lifecycle method is called whenever there is any uncaught error in React Component
    componentDidCatch(error, errorInfo) {
        console.error(error);
    }

    render() {
        // const captionLength = this.props.newProp.length;
        return (
            <div className={"line-item"}>
                <div className={"line-item-title"}>
                    {this.props.title}
                </div>
                <div className={"line-item-caption"}>
                    {this.props.caption}
                </div>
                {this.props.children}
            </div>
        );
    }
}

LineItem.propTypes = {
    title: PropTypes.string.isRequired,
    // newProp: PropTypes.string.isRequired,
    caption: PropTypes.string
};

LineItem.defaultProps = {
    caption: "My dummy caption"
};

export default LineItem;