import React, { Component } from 'react'
import NoteService from '../service/NoteService';

export default class ViewPage extends Component {

    state = {
        id: this.props.match.params.id,
        note: {}
    }

    componentDidMount(){
        NoteService.getNoteById(this.state.id).then((res) => {
            this.setState({note: res.data})
        })
    }

    backToHome = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3"  style={{background: "transparent"}}>
                    <h3 className="text-center">View Task Details</h3>
                    <hr />
                    <div className="card-body">
                        <div className="row">
                            <label>Task: </label>
                            <h3>{this.state.note.note}</h3>
                            <hr />
                            <label>Created At:</label>
                            <h3>{this.state.note.createdAt}</h3>
                        </div>
                    </div>
                    <button className="btn btn-warning" onClick={this.backToHome}>Back To Home Page</button>
                </div>

            </div>
        )
    }
}
