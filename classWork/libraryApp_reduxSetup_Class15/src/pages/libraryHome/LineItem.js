import React from 'react';
import PropTypes from 'prop-types';
import './LibraryHome.css';

class LineItem extends React.PureComponent {

    render() {
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
    caption: PropTypes.string
};

LineItem.defaultProps = {
    caption: "My dummy caption"
};

export default LineItem;