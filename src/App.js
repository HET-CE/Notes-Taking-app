import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom'
import Notes from './components/Notes';
import ViewPage from './components/ViewPage';
import AddNote from './components/AddNote';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path = "/" component = {Notes}></Route>
            <Route  path = "/view-page/:id" component = {ViewPage}></Route>
            <Route  path = "/add-note/:id" component = {AddNote}></Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
