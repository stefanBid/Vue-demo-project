/**
 * In questo service sono racchiuse tutte le chiamate server side
 * verso il back end per recuperare i dati
 */
import axios from 'axios'
export default class PostService{
    constructor(){
        this.baseUrl = "https://jsonplaceholder.typicode.com/posts"
    }

    async sendRequest(){
        return await axios.get(this.baseUrl)
    }
}


