### Challenge-amigoSecreto

•	Descripción del proyecto 
 
Amigo secreto es una página web que permite al usuario ingresar los de personas para posteriormente realizar un sorteo el cual tiene como resultado el nombre de una de las personas que se ingresó a la lista para de este modo convertirse en el amigo secreto. 

-Manual para el usuario 

Como se muestra en la imagen de abajo esta cuenta con dos botones uno para agregar amigos y el otro para realizar el sorteo, el usuario solo debe colocar un nombre en la caja de texto y pulsar el botón agregar posteriormente se mostrará el nombre de los amigos que se vayan integrando, en caso de intentar agregar el campo vacío este enviara un mensaje de error.

![pantalla1](https://github.com/user-attachments/assets/1b1817b5-0246-4f0f-93f7-129109c8cb83)

En la siguiente pantalla se puede observar cómo se muestra el nombre de la persona que ha sido sorteada en caso de intentar realizar el sorteo sin tener registrado algún nombre este enviara un mensaje de error. 

![pantalla2](https://github.com/user-attachments/assets/a3b8f2f4-9ccf-41ce-b4e5-7f697896ef76)

- Código

Verifica que el campo contenga información si cumple el criterio envía un alert con la indicación de que se debe agregar algún nombre si cuenta con información agrega el nombre al arreglo. 

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

Verifica que el arreglo tenga elementos si este no cuenta con ellos envía un mensaje que le pida al usuario que ingrese nombres de los amigos a sortear, si este si cuenta con elementos procede a realizar el sorteo y mostrar el nombre ganador del sorteo. 

```
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

```


- Tecnologias utilizadas
  
 -- JavaScript
 
 -- HTML
 
 -- CSS


