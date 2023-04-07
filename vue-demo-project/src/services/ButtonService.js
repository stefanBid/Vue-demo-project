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
        label: "button.addBtn",
        icon: "pi pi-plus",
        action: "ADD",
        class: "success"
    }

    //Bottone Modifica
    static editBtn = {
        label: "button.editBtn",
        icon: "pi pi-pencil",
        action: "EDIT",
        class: "warning"
    }

    //Bottone Elimina
    static deleteBtn = {
        label: "button.deleteBtn",
        icon: "pi pi-trash",
        action: "DELETE",
        class: "danger"
    }
}
