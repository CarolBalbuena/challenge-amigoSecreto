// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = []; // 


function agregarAmigo(){
    let amigoSecreto = document.getElementById('amigo').value;

    //validación de que el campo no se encuentre vacio
    if (amigoSecreto === "") 
    {
     alert('Campo invalido, ingrese el nombre de un amigo');
     return; 
    }
    // agrega elemento a la lista 
    else {
     arrayAmigos.push (document.getElementById('amigo').value);
 limpiarCaja();
 actualizarLista();
 return;

    }
 
function actualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for ( let i =0; i < arrayAmigos.length; i++){
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = arrayAmigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
return;

    }
   
}
function sortearAmigo(){

    if( arrayAmigos.length > 0){

let sorteo = Math.floor (Math.random() * arrayAmigos.length);
let tombolaAmigos = arrayAmigos[sorteo]; 
let resultados = document.getElementById("resultado");
 resultados.innerHTML =`Tu amigo secreto es: ${tombolaAmigos}`;
 let limpiarLista = document.getElementById("listaAmigos");
 limpiarLista.innerHTML= "";
    }
    else 
    {
        alert("Aún no has agregado amigos que sortear");
    }
    return;

}
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}
