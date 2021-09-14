import React from 'react';
import PropTypes from "prop-types";

class NavButton extends React.PureComponent {

    handleClick = (e) => {
        if (!this.props.disabled) {
            this.props.onClickHandler(e);
        }
    };

    render() {
        const {disabled, loading} = this.props;

        if (loading) {
            return <h1>...</h1>
        }
        return (
            <h1 onClick={this.handleClick} className={`nav-button ${disabled ? 'disabled' : ''}`}>
                {this.props.children}
            </h1>
        );
    }
}

NavButton.propTypes = {
    onClickHandler: PropTypes.func,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
};

NavButton.defaultProps = {
    onClickHandler: () => null,
    disabled: false,
    loading: false
};

export default NavButton;