import React from 'react'
import {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useEffect} from 'react'
import NotesServices from '../Services/NotesServices';


function NoteDetails() {
    //used to access parameters of certain router
    const{id} =  useParams();
    const history = useHistory();
    const [currentNote, setcurrentNote] = useState('')

    useEffect(() => {
        NotesServices.get(id) // returns http://localhost:8081/api/notes{id}
        .then(note => {
            setcurrentNote(note.data);
        }).catch(error => {
            console.log('Something went wrong', error)
        })
    }, [])

    const handleDelete = () => {
        NotesServices.remove(id)
        .then(note => {
            history.push("/");
        }).catch(error => {
            console.log("Something went wrong", error);
        })
    }

    const handleEdit = () => {
        history.push(`/notes/edit/${id}`);
       
    }

    return (
        <div className="note-details main-content">
           {
               currentNote && 
                <div>
                <article> 
                    <h3 style={{'font-family': 'Montserrat' }} className = "note-details-title  text-capitalize "> {currentNote.title}</h3>
                    <div className="mb-3 font-italic metadata" > 
                        <span> {currentNote.updated_at} </span>
                        <span className="text-capitalize">, {currentNote.category} </span>
                </div>
                <div className="mb-3"> {currentNote.body} </div>
            </article>
                <button onClick={handleEdit}  > Edit</button>
             <button className="deleteBtn" onClick={handleDelete} className="ml-3"> Delete</button>
                
                
                
                </div>
           }
            
        </div>
    )
}

export default NoteDetails
/*
<article> 
<h5 className = "text-capitalize primary-color"> {currentNote.title}</h5>
<div className="mb-3 font-italic metadata" > 
    <span> {currentNote.updated_at} </span>
    <span className="text-capitalize">, {currentNote.category} </span>
</div>
    <div className="mb-3"> {currentNote.body} </div>
</article>
<button onClick={handleEdit}  > Edit</button>
<button onClick={handleDelete} className="ml-3"> Delete</button>

*/