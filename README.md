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

        -creo il mio elemento div;
        -gli assegno una classe predefinita in css;
        -gli assegno una grandezza sulla base della difficoltà scelta;
        -inserisco all'interno dell'elemento il numero del suo indice creato con il ciclo for;
        -ritorno il mio elemento cosi' completo;

2. Definisco una funzione che conterrà la logica di gioco al click di ogni cella:

-creo una costante che identifichi il numero all'interno della cella che clicco;

        -imposto delle condizione annidate:
                SE (l'array bombs include il numero cliccato) {
                        -stampa un messaggio di sconfitta;
                        -invoca la funzione endGame;
                } ALTRIMENTI {
                        -colora la cella di blu;
                        SE (la lunghezza dell'array delle celle cliccate è inferiore al totale delle cell meno le bombe) {
                                pusha il valore all'interno dell'array;
                        }ALTRIMENTI{
                                -stampa il messaggio di vittoria;
                                -invoca la funzione endGame
                        }
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

5. Definisco una funzione contenente gli eventi da sviluppare in caso la partita finisca:
Con un ciclo for:

        -creo una costante abbinata ad ogni singola cella;
        -rimuovo l'eventListener da ogni cella;
        -gli dico che se il suo valore era incluso nell'array bombs, deve colorarsi di rosso;

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
3. Creo 3 switch, una per ogni difficoltà, contenenti come valori il numero di celle da generare e la loro grandezza;
4. Creo un ciclo for che utilizzerà le variabili del mio switch per generare una griglia sulla base della difficoltà selezionata, che sarà cosi strutturato:

        -invoco la mia funzione per creare le celle inserendo l'indice di ogni cella e la gendezza che dovrà avere; 
        -assegno ad ogni cella cosi' creata la mia funzione di click, contenente la logica di gioco;
        -appendo tutto le celle cosi create, alla mia griglia;
5. Genero le bombe invocando l'apposita funzione e dandogli come valore massimo la grandezza della griglia generata;
