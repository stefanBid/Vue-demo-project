/**
 * In questo service sono racchiuse tutte le chiamate server side
 * verso il back end per recuperare i dati
 */

import axios from 'axios'
export default class CommentService{
    constructor(){
        this.baseUrl = "https://jsonplaceholder.typicode.com/comments"
    }

    async sendRequest(){
        return await axios.get(this.baseUrl)
    }
}