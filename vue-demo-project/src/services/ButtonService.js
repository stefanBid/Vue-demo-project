/**
 * Questo Service ci aiuta a definire le caratteristiche di tutte le tipologie di Button
 * Da utilizzare nell'applicativo.
 * Ogni bottone è caratterizzato da:
 * - header -> Contenuto testuale
 * - icon -> icona associata
 * - action -> tipologia di azione che esegue
 * - class -> classe css di supporto base
 */

export default class ButtonService{
    
    //Bottone Aggiungi
    static addBtn = {
        header: "Aggiungi",
        icon: "pi-pi-plus",
        action: "ADD",
        class: "success"
    }

    //Bottone Modifica
    static editBtn = {
        header: "Modifica",
        icon: "pi pi-pencil",
        action: "EDIT",
        class: "warning"
    }

    //Bottone Elimina
    static deleteBtn = {
        header: "Elimina",
        icon: "pi pi-trash",
        action: "DELETE",
        class: "danger"
    }
}
