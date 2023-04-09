import { createI18n } from "vue-i18n";

//Stringhe di traduzione
const messages = {
    //Inglese
    en:{
        // Stringhe nel file Navcomponent.vue
        nav:{
            homePth: "Home",
            postPth: "Posts",
            commentPth: "Comments"
        },
        
        //Stringhe che definiscono le label dei bottoni
        button:{
            addBtn: "Add",
            editBtn: "Edit",
            deleteBtn: "Delete"
        },

        //Stringhe contenute all'interno della form
        form:{
            addTtl:"Add new element",
            editTtl:"Edit element",
            placeHolder: "Insert"
        },

        //Stringhe contenute all'interno della finestra di rimozione
        deleteDialog:{
            headerMsg:"Are you sure you want to delete this item?",
            bodyMsg:"By confirming, the operation will be irreversible"
        },

        //Stringhe che definiscono la tipologia di errore quanso si richiedono dati ad un server
        error:{
            title:"An error has occurred!",
            body: "Please check your Internet connection or reload the page",
            tip: "If problem persists try again later"
        },

        // Stringhe che definiscono i titoli delle proprietà di un post 
        post:{
            strUserId:"User ID",
            strId: "Post ID",
            strTitle: "Post title",
            strBody: "Post body"
        },

        //Stringhe che definisco i titoli delle proprietà di un commento
        comment:{
            strPostId: "Post ID",
            strId:"Comment ID",
            strName: "Comment tiotle",
            strEmail: "User email",
            strBody: "Comment body"
        },

        // Stringhe nel file HomeView.vue
        homePage:{
            title: "Welcome to {appName}",
            subTitle:"A simple application, useful for reviewing the main rules of Vue JS"
        },

        // Stringhe nel file PostView.vue
        postPage:{
            title: "Post collection",
            tableHeader:"Posts"

        },

        //Stringhe nel file CommentView.vue
        commentPage:{
            title: "Comment collection",
            tableHeader: "Comments"
        }
    },

    //Italiano
    it:{
        // Stringhe nel file Navcomponent.vue
        nav:{
            homePth: "Home",
            postPth: "Articoli",
            commentPth: "Commenti"
        },
        
        //Stringhe che definiscono le label dei bottoni
        button:{
            addBtn: "Aggiungi",
            editBtn: "Modifica",
            deleteBtn: "Elimina"
        },

        //Stringhe contenute all'interno della form
        form:{
            addTtl:"Aggiungi un nuovo elemento",
            editTtl:"Modifica elemento",
            placeHolder: "Inserisci"
        },

        //Stringhe contenute all'interno della finestra di rimozione
        deleteDialog:{
            headerMsg:"Sei sicuro di voler eliminare questo elemento?",
            bodyMsg:"Confermando, l'operazione sarà irreversibile"
        },

        //Stringhe che definiscono la tipologia di errore quanso si richiedono dati ad un server
        error:{
            title:"Si è verificato un errore!",
            body: "Si prega di controllare la propria connessione a Internet o ricarica la pagina",
            tip: "Se il problema persiste riprova più tardi"
        },

        // Stringhe che definiscono i titoli delle proprietà di un post  
        post:{
            strUserId:"ID utente",
            strId: "ID articolo",
            strTitle: "Titolo dell'articolo",
            strBody: "Corpo dell'articolo"
        },

        //Stringhe che definisco i titoli delle proprietà di un commento
        comment:{
            strPostId: "ID articolo",
            strId:"ID commento",
            strName: "Titolo del commento",
            strEmail: "Email utente",
            strBody: "Corpo del commento"
        },

        // Stringhe nel file HomeView.vue
        homePage:{
            title: "Benvenuto in {appName}",
            subTitle:"Un semplice applicativo utile a ripassare le regole principali di Vue JS"
        },

        // Stringhe nel file PostView.vue
        postPage:{
            title:"Raccolta articoli",
            tableHeader:"Articoli"

        },

        //Stringhe nel file CommentView.vue
         commentPage:{
            title: "Raccolta commenti",
            tableHeader: "Commenti"
        }
    },
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy:false,
    globalInjection:true,
    messages
})