import axios from 'axios';

const NOTES = 'http://localhost:8080/api/notes';

class NoteService{
    getnotes(){
       return axios.get(NOTES);
    }
    getNoteById(noteId){
        return axios.get(NOTES + '/' + noteId);
    }
    deleteNoteById(noteId){
        return axios.delete(NOTES + '/' + noteId);
    }
    addNote(note){
        return axios.post(NOTES , note);
    }
    updateNote(note, noteId){
        return axios.put(NOTES + "/" + noteId, note);
    }
}

export default new NoteService();

// import axios from 'axios'

// const TASK_URL = 'http://localhost:8080/api/todo';


// class Todoservice{
//     getTodos(){
//         return axios.get(TASK_URL);
//     }
//     addTodo(todo){
//         return axios.post(TASK_URL, todo);
//     }
//     getTodoById(todoId){
//         return axios.get(TASK_URL + "/" + todoId);
//     }
//     updateTodo(todo, todoId){
//         return axios.put(TASK_URL + "/" + todoId, todo);
//     }
//     deleteTodo(todoId){
//         return axios.delete(TASK_URL + "/" + todoId);
//     }
// }

// export default new Todoservice();