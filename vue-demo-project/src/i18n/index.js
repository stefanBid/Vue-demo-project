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

        // Stringhe nel file HomeView.vue
        home:{
            title: "Welcome to {appName}",
            subTitle:"A simple application, useful for reviewing the main rules of Vue JS"
        },

        // Stringhe nel file PostView.vue
        post:{

        },

        //Stringhe nel file CommentView.vue
        comment:{

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

        // Stringhe nel file HomeView.vue
        home:{
            title: "Benvenuto in {appName}",
            subTitle:"Un semplice applicativo utile a ripassare le regole principali di Vue JS"
        },

        // Stringhe nel file PostView.vue
        post:{

        },

        //Stringhe nel file CommentView.vue
        comment:{
            
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