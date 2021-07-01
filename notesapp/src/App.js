
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Noteslist from './Components/Noteslist';
import NotFound from './Components/Notfound';
import Navbar from './Components/Navbar';
import AddNotes from './Components/AddNotes';
import NoteDetails from './Components/NoteDetails';


function App() {
  return (
    <BrowserRouter> 
    <section className= "home-page-section"> 
    <div className="container"> 


       <div>
      <Navbar />
      </div>
    <div className="noteList">
        <Switch>   
      <Route exact path="/" component={Noteslist}/>
      <Route  path="/add" component={AddNotes}/>
      <Route  path="/notes/edit/:id" component={AddNotes}/>
      <Route  path="/notes/:id" component={NoteDetails}/>
      <Route  path="*" component={NotFound}/>
      
      </Switch>
    </div>
    </div>
  </section>

    </BrowserRouter>
  );
}

export default App;
