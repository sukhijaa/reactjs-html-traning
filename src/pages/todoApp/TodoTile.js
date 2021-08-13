import React from 'react';
import PropTypes from 'prop-types';

class TodoTile extends React.Component {

    handleTileClick = (event) => {
        console.log("Tile Clicked here");
      if (this.props.type === 'New') {
          this.props.onCreateButtonClick();
      } else {
          this.props.onTileClick(this.props.id);
      }
    };

    handleDelete = (event) => {
        // Prevent event bubbling - Not recommended
        event.stopPropagation();
        // Prevent the complete default behavior. Event propagation is just a part of it - Recommended
        event.preventDefault();

        console.log("Delete clicked");
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
    onTileClick: PropTypes.func,
    id: PropTypes.number.isRequired,
};

TodoTile.defaultProps = {
    description: "Dummy Description 5",
    type: 'Existing',
    onCreateButtonClick: () => null,
    onDelete: () => null,
    onTileClick: () => null,
};

export default TodoTile;