/**
 * Lo Store ci permette di memorizzare una struttura di un particolare dato
 * In questo caso il dato in questione è un Post
 */

import { defineStore} from "pinia"
import {ref} from "vue"
import * as Yup from "yup"
import PostService from "@/services/PostService"


export const usePostStore = defineStore('PostStore', ()=>{
    // STATE DELLO STORE

    const ps = new PostService()

    // mock dei post
    const posts = ref([])

    // Costante che conterrà il template per visualizzare i dati in una tabella
    const postColumnTemplate = ref([
        { field: "userId", header: "post.strUserId" },
        { field: "id", header: "post.strId" },
        { field: "title", header: "post.strTitle" },
        { field: "body", header: "post.strBody" }
    ])

    //Costante che conterrà il template per visualizzare i dati all'interno di una form
    const postFormTemplate = ref([])


    //Costante per intrappolare eventuali errori da mostrare durante il caricamento dei dati
    const error = ref(null)

    //ACTION DELLO STORE

    function populatePostStore(){
        ps.sendRequest()
        .then(response => posts.value = response.data)
        .catch(er => error.value = er) 
    }

    function preparePostForDynamicForm(post){

        postFormTemplate.value = [
            {label:"post.strUserId", name:'userId', as:'input', type:'number', readOnly:false, value:undefined,rules: Yup.number().typeError('Per questo campo si accettano solo valori numerici').positive().typeError('Per questo campo si accettano solo valori positivi').min(1,'Il Valore numerico deve essere > 0 ').required('Campo richiesto')},
            {label:"post.strId", name:'id', as:'input', type:'number', readOnly:false, value:undefined, rules: Yup.number().typeError('Per questo campo si accettano solo valori numerici').positive().typeError('Per questo campo si accettano solo valori positivi').min(1,'Il Valore numerico deve essere > 0 ').required('Campo richiesto')},
            {label:"post.strTitle", name:'title', as:'input', type:'text', value:'', readOnly:false, rules: Yup.string().typeError('Per questo campo si accettano solo valori alfa-numerici').max(300, 'Il campo non deve essere composto da più di 300 caratteri').required('Campo richiesto').matches(/^[a-zA-Z\s]*$/, 'Il campo può contenere solo lettere e spazi')},
            {label:"post.strBody", name:'body', as:'textarea', type:'text', value:'', readOnly:false, rules: Yup.string().typeError('Per questo campo si accettano solo valori alfa-numerici').max(300, 'Il campo non deve essere composto da più di 300 caratteri').required('Campo richiesto')}
        ]

        if(post != undefined){
            for(let i = 0; i<postFormTemplate.value.length; i++){
                if((postFormTemplate.value[i].name === 'id')||(postFormTemplate.value[i].name === 'userId')){
                    postFormTemplate.value[i].readOnly = true
                }
                postFormTemplate.value[i].value = post[postFormTemplate.value[i].name]
            }
        }
    }
    
    //CRUD OPERATION
    function addPost(post){
        let p = {}
        p.userId = Number(post.userId)
        p.id = Number(post.id)
        p.title = String(post.title)
        p.body = String(post.body)
        posts.value.push(p)
    }

    function editPost(post){
        posts.value.forEach(p =>{
            if(p.id === Number(post.id)){
                p.userId = Number(post.userId)
                p.title = String(post.title)
                p.body = String(post.body)
            }
        })
    }

    function deletePost(post){
        posts.value.splice(posts.value.indexOf(post),1)
    }


    return{posts, postColumnTemplate, postFormTemplate, error, populatePostStore, preparePostForDynamicForm, addPost, editPost, deletePost}


})
