import React, { Component } from 'react'
import NoteService from '../service/NoteService'

import './notes.css';

export default class Notes extends Component {
    
    state = {
        notes: []
    }

    componentDidMount(){
        NoteService.getnotes().then((res) => {
            this.setState({notes:res.data})
        })
    }

    viewButton = (id) => {
        this.props.history.push(`/view-page/${id}`);
    }
    deleteButton = (id) => {
        NoteService.deleteNoteById(id).then((res) => {
            this.setState({notes: this.state.notes.filter(note => note.id !== id )});
        })
    }
    addButton = () => {
        this.props.history.push(`add-note/-1`)
    }
    updateButton = (id) => {
        this.props.history.push(`add-note/${id}`)
    }

    render() {
        return (
            <div>
                <h1> Notes App: </h1>
                <button className="btn btn-primary" onClick = {this.addButton}>Add Task</button>
                <table className = "table table-hover m-2 notes">
                    <thead className = "thead-dark">
                        <tr>
                            <td>Note</td>
                            <td>Created At</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.notes.map((note) => {
                                return (
                                    <tr key = {note.id} className = "notes__items">
                                        <td>{note.note}</td>
                                        <td>{note.createdAt}</td>
                                        <td>
                                            <button className="btn btn-success" onClick = {() => this.updateButton(note.id)}>Update</button>
                                            <button className="btn btn-warning" style={{marginLeft: "5px"}} onClick={() => this.viewButton(note.id)}>View</button>
                                            <button className="btn btn-danger" style={{marginLeft: "5px"}} onClick = {() => this.deleteButton(note.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
