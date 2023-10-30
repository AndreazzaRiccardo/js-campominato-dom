### ESERCIZIO:

Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**BONUS:**
1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
**2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

### FUNZIONI:
1. Definisco una funzione per generare gli elementi cella nel mio HTML:

        -creo il mio alemento div;
        -gli assegno una classe predefinita in css;
        -gli assegno una grandezza sulla base della difficoltà scelta;
        -inserisco all'interno dell'elemento il numero del suo indice creato con il ciclo for;
        -ritorno il mio elemento cosi' completo;
2. Definisco una funzione che conterrà la logica di gioco al click di ogni cella:

-creo una costante che identifichi il numero all'interno della cella che clicco;

        -imposto delle condizione annidate:
                SE (il mio flag è false) {
                        SE(l'array bombs contiene il numero da me cliccato){
                                -colora questo elemento di rosso;
                                -stampa il messaggio di sconfitta contenente anche il numero di celle che ho cliccato prima di perdere;
                                -imposta il mio flag true;
                        } ALTRIMENTI {
                                -colora questo elemento di blu;
                                SE(il numero di celle cliccate finora è minore del totale delle celle meno la lunghezza dell'array bombs) {
                                        -pusha il valore di questa cella nel mio array di celle già cliccate;
                                } ALTRIMENTI {
                                        -stampa il messaggio di vittoria;
                                        -imposta il mio flag true;
                                }
                        }
                }
        
-Per rendere visibili tutte le celle bomba in caso di sconfitta o di vittoria, imposto un'altra condizione:

        SE(il mio flag è true){
                -imposta un ciclo for per estrapolare ogni valore da ogni cella, e se un valore è contenuto nel mio array bombs, allora colora quell'elemento di rosso;
        }

                
3. Definisco una funzione per creare un numero random compreso tra 1 e un numero massimo;
4. Definisco una funzione in grado di restituirmi un array di 16 numeri casuali compresi tra 1 e la grandezza della griglia, sulla base alla difficoltà selezionata:

        -creo una costante array vuota;
        -creo un ciclo while:
                -fino a quando la lunghezza del mio array è minore di 16 {
                        -genera un numero casuale;
                }
                -SE il mio numero casuale non è gia presente nell'array, inseriscilo nell'array;
        -come valore di ritorno ho il mio array completo;


        

**DATI**
1. Definisco una costante abbinata al mio bottone play;
2. Definisco una costante abbinata all'elemento select della difficoltà;
3. Definisco una costante abbinata al contenitore delle mio future celle;
4. Definisco una costante abbinata al div che conterrà i vari messaggi riguardanti lo svolgimento del gioco;
5. Definisco una variabile globale da utilizzare all'interno della mia funzione di gameplay, contenente l'array bombs;
6. Definisco una variabile globale in cui pusherò mano a mano i valori contenuti nelle celle già cliccate;

### SVOLGIMENTO:

1. Sapendo che l'evento scatenante del gioco è il play del bottone, assegno subito un eventListener al mio bottone, dove poi andrò ad inserire tutta la logica;
2. Ripulisco tutti i miei elementi html, in modo che ad ogni play venga resettato tutto;
3. Creo una variabile flag per determinare se una casella bomba è stata cliccata;
4. Creo 3 switch, una per ogni difficoltà, contenenti come valori il numero di celle da generare e la loro grandezza;
5. Creo un ciclo for che utilizzerà le variabili del mio switch per generare una griglia sulla base della difficoltà selezionata, che sarà cosi strutturato:

        -invoco la mia funzione per creare le celle inserendo l'indice di ogni cella e la gendezza che dovrà avere; 
        -assegno ad ogni cella cosi' creata la mia funzione di click, contenente la logica di gioco;
        -appendo tutto le celle cosi create, alla mia griglia;
6. Genero le bombe invocando l'apposita funzione e dandogli come valore massimo la grandezza della griglia generata;
