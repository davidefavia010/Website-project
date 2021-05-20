var nodoNumeroDomanda;
var nodoTestoDomanda;
var nodoRisposta0;
var nodoTestoRisposta0;
var nodoRisposta1;
var nodoTestoRisposta1;
var nodoRisposta2;
var nodoTestoRisposta2;
var nodoAvanti;
var nodoRisultato;
var nodoInizia;
var numeroDomande;
var numeroDomandaCorrente;
var risposteDate;
function gestoreLoad () {
 try {
 nodoNumeroDomanda = document.getElementById("numeroDomanda");
 nodoTestoDomanda = document.getElementById("testoDomanda");
 nodoRisposta0 = document.getElementById("risposta0");
 nodoTestoRisposta0 = document.getElementById("testoRisposta0");
 nodoRisposta1 = document.getElementById("risposta1");
 nodoTestoRisposta1 = document.getElementById("testoRisposta1");
 nodoRisposta2 = document.getElementById("risposta2");
 nodoTestoRisposta2 = document.getElementById("testoRisposta2");
 nodoAvanti = document.getElementById("avanti");
 nodoRisultato = document.getElementById("risultato");
 nodoInizia = document.getElementById("inizia");
 nodoAvanti.onclick = gestoreClickAvanti;
 nodoInizia.onclick = gestoreClickInizia;
 numeroDomande = quiz.length;
 nuovoQuiz();
 } catch ( e ) {
 alert ("gestoreLoad " + e);
 }
}
window.onload = gestoreLoad;

function nuovoQuiz () {
 numeroDomandaCorrente = 0;
 aggiornaDomanda(numeroDomandaCorrente);
 scriviMessaggio(nodoRisultato, "");
 risposteDate = [];
}
function aggiornaDomanda (i) {
 scriviMessaggio(nodoNumeroDomanda,
 + (i + 1) + "/" + numeroDomande);
 var parte = quiz[i];
 scriviMessaggio(nodoTestoDomanda, parte.domanda)
 scriviMessaggio(nodoTestoRisposta0, parte.risposte[0]);
 scriviMessaggio(nodoTestoRisposta1, parte.risposte[1]);
 scriviMessaggio(nodoTestoRisposta2, parte.risposte[2]);
 nodoRisposta0.checked = false;
 nodoRisposta1.checked = false;
 nodoRisposta2.checked = false;
}
var quiz = [
 { // domanda 1
 domanda : "Nel film ''Batman il cavaliere oscuro'' quali di questi antagonisti è presente?",
 risposte : [
 "Joker",
 "Bane",
 "Il pinguino"
 ],
 rispostaEsatta : 0
 },
 { // domanda 1
 domanda : "Freddy Krueger, il cattivo del famoso film horror ''Nightmare'', cosa ha sulle dita della mano?",
 risposte : [
 "Siringhe",
 "Lame",
 "Teste"
 ],
 rispostaEsatta : 1
 },
 { // domanda 2
 domanda : "Nel film ''Una settimana da Dio'' cosa riesce a fare Jim Carrey alla zuppa che prende al ristorante?",
 risposte : [
 "Versa la zuppa sulla testa di un altro cliente",
 "La fa fluttuare",
 "Crea uno squarcio separando in due il liquido"
 ],
 rispostaEsatta : 2
 },
 { // domanda 3
 domanda : "Quale delle seguenti città europee appare nel film ''Colpa delle stelle''?",
 risposte : [
 "Berlino",
 "Londra",
 "Amsterdam"
 ],
 rispostaEsatta : 2
 },
{ // domanda 4
 domanda : "Nel film ''Avatar'' come riescono i Na'vi a cavalcare le creature volanti?",
 risposte : [
 "Attraverso il braccio",
 "Attraverso la coda dei capelli",
 "Attraverso la voce"
 ],
 rispostaEsatta : 1
 },
{ // domanda 5
 domanda : "Nel film ''Seven'' il serial killer all'opera di quale scrittore si ispira per compiere i suoi omicidi?''",
 risposte : [
 "Dante Alighieri",
 "Virginia Woolf",
 "Charles Baudelaire"
 ],
 rispostaEsatta : 0
 },
{ // domanda 6
 domanda : "Nel film horror ''1408'' quale di queste canzoni parte alla radio ogni volta che sta per succedere qualcosa di strano?",
 risposte : [
 "We've only just began dei Carpenters",
 "Hey Jude dei Beatles",
 "Hey you dei Pink Floyd"
 ],
 rispostaEsatta : 0
 },
{ // domanda 7
 domanda : "Nel film ''Titanic'', il cuore dell'oceano cos'è?",
 risposte : [
 "Un bracciale",
 "Un anello",
 "Una collana"
 ],
 rispostaEsatta : 2
 },
{ // domanda 8
 domanda : "Nel film ''Hunger Games'' quanti sono i partecipanti selezionati per il gioco''?",
 risposte : [
 "50",
 "24",
 "100"
 ],
 rispostaEsatta : 1
 },
{ // domanda 9
 domanda : "Quale dei seguenti animali accompagna Will Smith nel film ''Io sono Leggenda''?",
 risposte : [
 "Un lupo",
 "Un cane",
 "Un gatto"
 ],
 rispostaEsatta : 1
 }
];

function scriviMessaggio (nodo, messaggio) {
 var nodoTesto = document.createTextNode(messaggio);
 if (nodo.childNodes.length == 0) {
 nodo.appendChild(nodoTesto);
 } else {
 nodo.replaceChild(nodoTesto, nodo.firstChild);
 }
}

function gestoreClickAvanti () {
 try {
 if (numeroDomandaCorrente == numeroDomande) {
 return;
 }
 if (nodoRisposta0.checked) {
 risposteDate[numeroDomandaCorrente] = 0;
 } else if (nodoRisposta1.checked) {
 risposteDate[numeroDomandaCorrente] = 1;
 } else if (nodoRisposta2.checked) {
 risposteDate[numeroDomandaCorrente] = 2;
 } else {
 risposteDate[numeroDomandaCorrente] = -1;
 }
 numeroDomandaCorrente++;
 if (numeroDomandaCorrente == numeroDomande) {
	 var esito = calcolaEsito();
 var s;
 if (esito >= 0 && esito <=2) {
 s = "Risposte esatte: "+esito+ "/" + numeroDomande + " (SICURO TI PIACCIANO I FILM?)";
 } else if(esito > 2 && esito <=4) {
 s = "Risposte esatte: " +esito+ "/" + numeroDomande+ " (QUALCOSA SAI, MA C'È MOLTO LAVORO DA FARE)";
 }  else if(esito > 4 && esito <=6) {
 s = "Risposte esatte: " +esito+ "/" + numeroDomande+ " (SEI UN INTENDITORE MEDIO)";
 }  else if(esito > 6 && esito <=8) {
 s = "Risposte esatte: " +esito+ "/" + numeroDomande+ " (I FILM SONO LA TUA PASSIONE!";
 }  else if(esito > 8 && esito <=10) {
 s = "Risposte esatte: " +esito+ "/" + numeroDomande+ " (SEI UN VERO CINEFILO!)";
 }
 
 scriviMessaggio(nodoRisultato, s);
 } else {
 aggiornaDomanda(numeroDomandaCorrente);
 }
 } catch ( e ) {
 alert ("gestoreClickAvanti " + e);
 }
}
function calcolaEsito () {
 var numeroRisposteEsatte = 0;
 for (var i = 0; i < quiz.length; i++) {
 var parte = quiz[i];
 if (parte.rispostaEsatta == risposteDate[i]) {
 numeroRisposteEsatte++;
 }
 }
 return numeroRisposteEsatte;
}

function gestoreClickInizia () {
 try {
 nuovoQuiz();
 } catch ( e ) {
 alert ("gestoreClickInizia " + e);
 }
}









 




