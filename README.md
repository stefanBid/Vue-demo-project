# Vue-demo-project
### Progetto demo di un'applicazione Vue 3 moderna.
<br>

Al suo interno troviamo le seguenti caratteristiche:
- <span style="color:#42D392"> Routing (navigabilità interna)</span> 
- <span style="color:#42D392"> Componenti dinamiche</span> 
- <span style="color:#42D392"> Form Reattivi </span>
- <span style="color:#42D392"> Internazionalizzazione dei testi</span> 
- <span style="color:#42D392"> Store dei dati con Pinia </span>
- <span style="color:#42D392"> Chiamate Server Side con Axios</span> 

<br>
<hr>

## Quick Start
<hr>
<br>

> **NOTA**: Questo processo non è universale ma è uno di quelli validi per la creazione di un applicativo con Vue 3. Per altre modalità di creazione consulta la documentazione ufficiale di [Vue 3](https://vuejs.org/guide/quick-start.html).

La creazione di questa applicazione demo parte dalla configurazione via terminale.

Perciò ci si posiziona nella directory nel quale si vuole creare il progetto in locale e si esegue il seguente comando:

```sh
npm init vue@latest
```

Parte quindi la fase di configurazione con una serie diimpostazioni richieste a cascata che si possono o meno integrare nello scheletro iniziale del progetto, in modo da avere una base di partenza valida in base a quelle che sono le nostre esigenze di sviluppo per quell'applicativo.

Nel caso del progetto **Demo** in questione il settaggio delle impostazioni è stato il seguente:

```sh
✔ Project name: … <vue-demo-project>
✔ Add TypeScript? … [No] / Yes
✔ Add JSX Support? … [No] / Yes
✔ Add Vue Router for Single Page Application development? … No / [Yes]
✔ Add Pinia for state management? … No / [Yes]
✔ Add Vitest for Unit testing? … [No] / Yes
✔ Add Cypress for both Unit and End-to-End testing? … [No] / Yes
✔ Add ESLint for code quality? … No / [Yes]
✔ Add Prettier for code formatting? … No / [Yes]

Scaffolding project in ./<vue-demo-project>...
Done.
```
>**NOTA**: Se si vuole lavorare sul seguente progetto in locale, esegui il download della repo. I seguenti comandi da terminale saranno utili per permettre all'applicatico di funzionare:

<br>

**Per installare le dipendenze dell'app non presenti nella repo**:

```sh
npm install 
```

**Compilazione e Hot-reload in modalità sviluppo:**

```sh
npm run dev 
```

**Compilazione e Minify in modalità produzione:**

```sh
npm run build
```

**Lint con [ESLint](https://eslint.org/)**

```sh
npm run lint
```


