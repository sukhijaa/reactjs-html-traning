import React from 'react';
import PropTypes from 'prop-types';

class TodoTile extends React.Component {

    handleTileClick = () => {
      if (this.props.type === 'New') {
          this.props.onCreateButtonClick();
      }
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.onClick !== this.props.onClick) {
            console.log("onClick has changed");
        }
        return true;
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    };

    render() {
        const {initials, description, type} = this.props;
        const wrapperStyling = type === 'New' ? 'todo-tile tile-1 new-tile' : 'todo-tile tile-1';

        return (
            <div className={wrapperStyling} onClick={this.handleTileClick}>
                <div className={"todo-tile-logo"}>{initials}</div>
                <div className={"todo-tile-description"}>
                    {description}
                </div>
                {
                    type !== "New" ? <div className={"todo-tile-delete-button"} onClick={this.handleDelete}>Delete</div> : null
                }
                {/*{*/}
                {/*    type !== "New" && <div className={"todo-tile-delete-button"} onClick={this.handleDelete}>Delete</div>*/}
                {/*}*/}
            </div>
        );
    }
}

TodoTile.propTypes = {
    initials: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.oneOf(['New', 'Existing']),
    onCreateButtonClick: PropTypes.func,
    onDelete: PropTypes.func,
    id: PropTypes.number.isRequired,
};

TodoTile.defaultProps = {
    description: "Dummy Description 5",
    type: 'Existing',
    onCreateButtonClick: () => null,
    onDelete: () => null
};

export default TodoTile;