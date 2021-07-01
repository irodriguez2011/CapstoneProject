import axios from "axios";

//const read_notes = "http://localhost:8081/api/notes";


export default axios.create({

  baseURL: "http://localhost:8081/api",
   headers:{
    "Content-type": "application/json"
    } 

})