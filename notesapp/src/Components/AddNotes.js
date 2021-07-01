import React from 'react'
import {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import NotesServices from '../Services/NotesServices';
import "./addnotes.css"

function AddNotes() {
    const [title, setTitle] = useState('')
    const [body, setbody] = useState('')
    const [category, setcategory] = useState('Other')
    const [errors, seterrors] = useState('')
    const history = useHistory();
    const {id} = useParams();

const saveNote= (e) => {
    e.preventDefault();
    if (!title || !body) {
        seterrors(true);
        return;
    }
    //create note object
    const note = {id, title,body,category};
    console.log('printing note',note);
    
    if (id) {
        // call service update method
        NotesServices.update(note)
        .then(res => {
            console.log("Note updated successfully", res.data)
            history.push("/")
        })
        .catch(error => {
            console.log("Something went wrong",error)
        })
    } else {
        //call service create method
        NotesServices.create(note)
        .then(res => {
            console.log("Note Added successfully", res.data)
            history.push("/")
        })
        .catch(error => {
            console.log("Something went wrong", error)
        })
    }
}


    useEffect(() => {
        if (id) {
            NotesServices.get(id)
            .then(note => {
                setTitle(note.data.title)
                setbody(note.data.body)
                setcategory(note.data.category)
            })
            .catch(error => {
                console.log("Something went wrong" , error)
            })
        }

    }, [])

    return (
        
        <div className="create ">
            <div className="text-center" >
             <h5>{id ? "Update Note" : "Add a New Note"} </h5>
             {errors && <span style={{color: 'red', fontStyle: 'italic'} }> Please enter mandatory fields</span>}
             </div>
           
            <form>  
               <div className="form-group">
                <label htmlFor="title">   
                    Note Title: <sup>*</sup>
                </label>
                <input      
                    type="text" className="form-control" id="title"
                    value={title} onChange={(e) => setTitle(e.target.value)}
                />

                </div>

                <div className="form-group">
                <label htmlFor="body">   
                    Note Description: <sup>*</sup>
                </label>
                <textarea  style={{height:"200px"}} id="body" className="form-control" value={body} onChange={(e) => setbody(e.target.value)}> </textarea>
                
                </div>
            
                <div className="form-group">
                <label htmlFor="category">   
                    Note Category:
                </label>
                <select id="category" className="form-control" value={category} onChange={(e) => setcategory(e.target.value)}>
                  <option value="shopping"> Shopping</option>
                  <option value="entertainment"> Entertainment</option>
                  <option value="Password Management"> Password Management </option>
                  <option value="Misc"> Miscellaneous</option>
                  <option value="ToDo"> To-Do</option>
                  <option value="Other"> Other</option>
                 </select>
                
                </div>

                <div className="text-center"> 
                <button onClick={(e) => saveNote(e)}> {id ? "Update" : "Add Note"}  </button>
                </div>
            </form>
        </div>
       
    )
}

export default AddNotes
