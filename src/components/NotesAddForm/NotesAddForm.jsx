import { Component } from 'react';
import './NotesAddForm.css';
import add from '../../img/add.png';

class NotesAddForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      content: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.content.trim()) return;  
    this.props.onAdd(this.state.content.trim());  
    this.setState({
      content: '',
    });
  }

  render() {
    const { content } = this.state;
    return (
      <div className="app-add-form">
        <form className="form" onSubmit={this.onSubmit}> 
          <div className="info-clocks">
            <div className="sub-title"></div> 
            <textarea type="text" 
              className="textarea"
              name="content"
              value={content}
              onChange={this.onValueChange}
            />
          </div>
          
          <button type="submit" className="btn-add">
            <img className="icon-add" src={add} alt="add" />
          </button>
        </form>
      </div>
    );
  }
}

export default NotesAddForm;
