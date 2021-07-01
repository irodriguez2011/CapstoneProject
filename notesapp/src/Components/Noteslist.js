import { useState } from "react";
import { useEffect } from "react";
import NotesService from "../Services/NotesServices"
import { Link } from "react-router-dom";
import img from './37435-5-pencil-icon-flat.png'


const NotesList = () => {

    const [notes,setNotes] = useState([])

    useEffect(() => {
        NotesService.getAll().then(response => {
          
            setNotes(response.data)
        }).catch(error => {
                console.log('Something went wrong',error)
                
        })
       
    }, []);


    return ( 

            <div className="main-content" > 
               
               <div> 
               
               
                <h1  style= { { 'font-family': 'Benne, serif'}} className= "primary-color"> List of Notes 
                <img style={{width:"40px", height:"40px"}} src={img} /> </h1> 
                    
                
                </div>
                     
                <div className="notes-list mt-4"> 
                <p className="ml-1">Click below to view/edit note </p>
             {
                 notes.map(note => (  
                    <div key={note.id} className="notes-preview mt-3">
                        <Link to={`/notes/${note.id}`}>
                        <h4  style= { {color:'#26261F',}} className=" text-capitalize"> <b> {note.title} </b> </h4>
                        <p  style= { {color: "#A68D8D"}} > <em>  {note.updated_at} </em></p>
                        <p>  Category: {note.category}  </p>
                        <p> {note.body}</p>

                         </Link>
                    
                    </div>
            

             )) 
           }
                </div>
            </div>
     );

}

 
export default NotesList;