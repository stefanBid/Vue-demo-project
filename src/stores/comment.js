/**
 * Lo Store ci permette di memorizzare una struttura di un particolare dato
 * In questo caso il dato in questione è un Commento
 */

import { defineStore } from "pinia"
import { ref } from "vue"
import * as Yup from "yup"
import CommentService from "@/services/CommentService"

export const useCommentStore = defineStore('CommentStore', ()=>{

    //STATO DELLO STORE

    const cs = new CommentService()

    //mock dei commenti
    const comments = ref([])

    // Costante che conterrà il template per visualizzare i dati in una tabella
    const commentColumnTemplate = ref([
        {field:"postId", header:"comment.strPostId" },
        {field:"id", header:"comment.strId" },
        {field:"name", header:"comment.strName" },
        {field:"email", header:"comment.strEmail" },
        {field:"body", header:"comment.strBody" },
    ])

    // Costante che conterrà il template per visualizzare i dati in una form
    const commentFormTemplate = ref(null)

    // Costante per intrappolare eventuali errori da mostrare durante il caricamento dei dati
    const error = ref (null)

    //ACTION DELLO STORE
    function populateCommentStore(){
        cs.sendRequest()
        .then(response => comments.value = response.data)
        .catch(er => error.value = er)
    } 

    function prepareCommentForDynamicForm(comment){
        commentFormTemplate.value = [
            {label:"comment.strPostId", name:'postId', as:'input', type:'number', readOnly:false, value:undefined,rules: Yup.number().typeError('Per questo campo si accettano solo valori numerici').positive().typeError('Per questo campo si accettano solo valori positivi').min(1,'Il Valore numerico deve essere > 0 ').required('Campo richiesto')},
            {label:"comment.strId", name:'id', as:'input', type:'number', readOnly:false, value:undefined, rules: Yup.number().typeError('Per questo campo si accettano solo valori numerici').positive().typeError('Per questo campo si accettano solo valori positivi').min(1,'Il Valore numerico deve essere > 0 ').required('Campo richiesto')},
            {label:"comment.strName", name:'name', as:'input', type:'text', value:'', readOnly:false, rules: Yup.string().typeError('Per questo campo si accettano solo valori alfa-numerici').max(70, 'Il campo non deve essere composto da più di 70 caratteri').required('Campo richiesto').matches(/^[a-zA-Z\s]*$/, 'Il campo può contenere solo lettere e spazi')},
            // eslint-disable-next-line no-useless-escape
            {label:"comment.strEmail", name:'email', as:'input', type:'email', value:'', readOnly:false, rules: Yup.string().typeError('Per questo campo si accettano solo caratteri').required('Campo richiesto').matches(/^\w+([\.-]?\w+)*@\w+([\..-]?\w+)*(\.\w{2,3})+$/, 'Formato Email non valido')},
            {label:"comment.strBody", name:'body', as:'textarea', type:'text', value:'', readOnly:false, rules: Yup.string().typeError('Per questo campo si accettano solo valori alfa-numerici').max(300, 'Il campo non deve essere composto da più di 300 caratteri').required('Campo richiesto')}
        ]

        if(comment != undefined){
            for(let i = 0; i<commentFormTemplate.value.length; i++){
                if((commentFormTemplate.value[i].name === 'id') || (commentFormTemplate.value[i].name === 'postId') ){
                    commentFormTemplate.value[i].readOnly = true
                }
                commentFormTemplate.value[i].value = comment[commentFormTemplate.value[i].name]
            }
        }
    }

    //CRUD OPERATION
    function addComment(comment){
        let c = {}
        c.postId = Number(comment.postId)
        c.id = Number(comment.id)
        c.name = String(comment.name)
        c.email = String(comment.email)
        c.body = String(comment.body)
        comments.value.push(c)
    }

    function editComment(comment){
        comments.value.forEach(c =>{
            if(c.id === Number(comment.id)){
                c.postId = Number(comment.postId)
                c.name = String(comment.name)
                c.email = String(comment.email)
                c.body = String(comment.body)
            }
        })
    }

    function deleteComment(comment){
        comments.value.splice(comments.value.indexOf(comment),1)
    }

    return{comments, commentColumnTemplate, commentFormTemplate, error, populateCommentStore, prepareCommentForDynamicForm, addComment, editComment, deleteComment}


})