### challenge-amigoSecreto

 -Descipcion del proyect 
 
Amigo secreto es una pagina web que permite al usuario ingresar el nombres de personas para posteriormente realizar un sorteo el cual tiene como resultado el nombre de una de las personas que se ingreso a la lista para de este modo convertirse en el amigo secreto. 

-Manual para el usuario 

como se muestra en la imagen de abajo esta cuenta con dos botones uno para agragar amigos y el otro para realizar el sorteo, el usuario solo debe colocar un nombre en la caja de texto y pulsar el boton agregar posteriormente se mostrara el nombre de los amigos que se vayan integrando, en caso de intentar agregar el campo vacio este enviara un mensaje de error.

![pantalla1](https://github.com/user-attachments/assets/1b1817b5-0246-4f0f-93f7-129109c8cb83)

en la siguiente pantalla se puede observar como se muetra el nombre de la persona que ha sido sorteada en caso de intentar realizar el sorteo sin tener registrado algun nombre este enviara un mensaje de error. 

![pantalla2](https://github.com/user-attachments/assets/a3b8f2f4-9ccf-41ce-b4e5-7f697896ef76)

- Codigo

Verica que el campo contenga informacion si cumple el criterio envia alert con la indicacion de que se debe agregar algun nombre si cuenta con informacion agraga el nombre al arreglo. 
  ```
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
```
Muestra los elementos que se encuentran en el arreglo 
  ```
 let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for ( let i =0; i < arrayAmigos.length; i++){
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = arrayAmigos[i];
        listaAmigos.appendChild(nuevoAmigo);

```


- Tecnologias utilizadas
  
  *javaScript
  *HTML
  *CSS


