import React, { Component } from 'react'
import NoteService from '../service/NoteService'

class AddNote extends Component {
    state = {
        id: this.props.match.params.id,
        note: '',
        createdAt: new Date().getFullYear() + "-" + ((new Date().getMonth()+1) < 10 ? "0" + (new Date().getMonth()+1) : (new Date().getMonth()+1)) + "-" + ((new Date().getDate()) < 10 ? "0" + (new Date().getDate()): (new Date().getDate())),
    }
    
    changeNoteHandler = (event) => {
        this.setState({ note: event.target.value })
    }

    cancel = () => {
        this.props.history.push("/");
    }

    componentDidMount() {

        if (this.state.id == -1) {
            return
        }
        else {
            NoteService.getNoteById(this.state.id).then((res) => {
                let note = res.data;
                this.setState({
                    note: note.note,
                    createdAt: note.createdAt,
                })
            })
        }
    }

    saveNote = (e) => {
        e.preventDefault();
        let noteCreate = { note: this.state.note , createdAt: this.state.createdAt };
        let noteUpdate = { note: this.state.note , createdAt: this.state.createdAt }
        if(this.state.id == -1){
            NoteService.addNote(noteCreate).then(res => {
                this.props.history.push("/");
            })
        }
        else{
            NoteService.updateNote(noteUpdate, this.state.id).then(res => {
                this.props.history.push('/');
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3" style={{marginTop: "20px"}}>
                            <h3 className=" text-center">{ this.state.id == -1 ? "Add Note": "Update Note" }</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group" style ={{marginBottom: "10px"}}>
                                        <label htmlFor="">Note</label>
                                        <textarea type="text" placeholder="Your Note" name="note" className="form-control"
                                            value={this.state.note} onChange={this.changeNoteHandler} required ></textarea>
                                    </div>
                                    { this.state.id == -1   ?    
                                        <div className="form-group"  style ={{marginBottom: "5px"}}>
                                            <label htmlFor="">Created At</label>
                                            <input type="date" placeholder="Created At" name="createdAt" className="form-control" value={this.state.createdAt}  required />
                                        </div>     :  
                                        null
                                    }
                                    <button className="btn btn-success" onClick={this.saveNote}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNote;