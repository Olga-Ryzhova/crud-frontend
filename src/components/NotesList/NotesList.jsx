import './NotesList.css';
import NotesListItem from '../NotesListItem/NotesListItem';
import update from '../../img/update.png';

const NotesList = ({ notes, onDelete, onUpdate }) => {
  const elements = notes.map(item => {
    const { id, ...itemProps } = item;

    return (
      <NotesListItem
        key={id} {...itemProps}
        onDelete={() => onDelete(id)}
      />
    );
  });

  return (
    <>
      <div className="noteUpdate">
        <h1 className="noteTitle">Notes</h1>
        <button type="button" className="btn-update" onClick={onUpdate}>
          <img className="icon-update" src={update} alt="update" />
        </button>
      </div>

      <ul className="app-list">
        {elements}
      </ul>
    </>
  );
}

export default NotesList;
