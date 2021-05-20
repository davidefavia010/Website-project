var nodo_film1;
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
function gestoreLoad(){
  try {
    var nodo_film1 = document.getElementById("film1");
    var nodo_film2 = document.getElementById("film2");
    var nodo_film3 = document.getElementById("film3");                  // gestisce variabili//
    var nodo_film4 = document.getElementById("film4");
    var nodo_film5 = document.getElementById("film5");


    nodo_film1.onclick = gestoreClick;
    nodo_film2.onclick = gestoreClick;
    nodo_film3.onclick = gestoreClick;                            // registra eventi//
    nodo_film4.onclick = gestoreClick;
    nodo_film5.onclick = gestoreClick;
   
	

  } catch (e) {
    alert("gestoreLoad " + e);
  }
}
window.onload = gestoreLoad;






function gestoreClick(){
  try {
    var descrizione = this.id + "_description";                    // prendere gli id che dopo hanno scritto _description //
    var nodo = document.getElementById(descrizione); 				//poi gli dico di prendere i vari elementi con id + _description e per ognuno //
    if(nodo.getAttribute("class") == "descrizioneno")				//di partire dalla classe descrizioneno(per non renderla visibile all'inizio //
      nodo.className = "descrizionesi";								//e dopo gli dico che ad ogni click deve mostrare classe descrizione si , //
    else
      nodo.className = "descrizioneno";								//altrimenti all'altro click di nuovo classe descrizione no //
  } catch (e) {
    alert("gestoreClick " + e);
  }
}




