import { Component } from "react";
import NotesAddForm from "../NotesAddForm/NotesAddForm";
import NotesList from "../NotesList/NotesList";
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.loadNotes(); 
  }

  loadNotes = () => {
    fetch('http://localhost:7070/notes')
      .then(response => response.json())
      .then(notes => {
        this.setState({ notes });
      })
      .catch(error => console.error('Error fetching notes:', error));
  }

  addNewNote = (content) => {
    const newItem = {
      content,
    };

    fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
    .then(() => this.loadNotes()) 
    .catch(error => console.error('Error adding note:', error));
  };

  deleteNote = (id) => {
    fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE',
    })
    .then(() => this.loadNotes()) 
    .catch(error => console.error('Error deleting note:', error));
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="container">
        <NotesList 
          notes={notes}
          onDelete={this.deleteNote}
          onUpdate={this.loadNotes} 
        />
        <NotesAddForm onAdd={this.addNewNote} />
      </div>
    );
  }
}

export default App;
