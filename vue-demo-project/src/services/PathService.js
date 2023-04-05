/**
 * Questo Service ci aiuta a definire le caratteristiche dei link 
 * Per link si intende i path che ci permettono di navigare internamente la nostra app demo.
 * Ogni link è caratterizzato da:
 * - header -> Contenuto testuale del link (riferimento a i18n)
 * - destination -> Path del percorso di destinazione al click
 * - icon -> icona associata
 */

export default class PathService{

    //Home Path
    static homePth = {
        header: "nav.homePth",
        destination: "/",
        icon: 'pi pi-home'
    }

    //Post Path
    static postPth = {
        header:"nav.postPth",
        destination: "/posts",
        icon: "pi pi-hashtag"
    }

    //Comment Path
    static commentPth = {
        header: "nav.commentPth",
        destination: "/comments",
        icon: "pi pi-comments"
    }
}