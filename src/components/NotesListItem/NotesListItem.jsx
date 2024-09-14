import React, { Component } from 'react';
import './NotesListItem.css';

import deleteIcon from '../../img/delete.png';

class NotesListItem extends Component {
  render() {
    const { content, onDelete } = this.props;

    return (
      <li className="list-group-item">
        <div className="contetnt">
          <div className="noteContetnt">{content}</div> 
        </div>

        <div className="list-group-buttons">
          <button type="button" className="btn-delete" onClick={onDelete}>
            <img className="icon" src={deleteIcon} alt="delete" />
          </button>
        </div>
      </li>
    );
  }
}

export default NotesListItem;