import Client from "../http-common";

const getAll = () => {
    return Client.get("/notes");

}

const create = data => {
    return Client.post("/notes",data);
}

const get = id => {
    return Client.get(`/notes/${id}`)
}

const remove = id => {
    return Client.delete(`/notes/${id}`)
}

const update = data => {
    return Client.put("/notes" , data)
}


export default {getAll, create, get, remove,update} ;