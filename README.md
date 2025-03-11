### challenge-amigoSecreto

 -Descipcion del proyect 
Amigo secreto es una pagina web que permite al usuario ingresar el nombres de personas para posteriormente realizar un sorteo el cual tiene como resultado el nombre de una de las personas que se ingreso a la lista para de este modo convertirse en el amigo secreto. 

-Manual para el usuario 

![pantalla1](https://github.com/user-attachments/assets/1b1817b5-0246-4f0f-93f7-129109c8cb83)
![pantalla2](https://github.com/user-attachments/assets/a3b8f2f4-9ccf-41ce-b4e5-7f697896ef76)

- Codigo
**agraga el nombre al arreglo y verifaca que el campo no se encuentre vacio 

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


