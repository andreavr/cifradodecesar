//creando una funcion cipher
function cipher (string){
    //creando un contador donde iran los indices en forma de string
    var count = '';
    //haciendo un bucle que pase elemento por elemento
      for(i=0;i<string.length;i++){
          //utilizamos la funcion string.charCodeAt y pasa como string en count, caracter por caracter
       count = count + string.charCodeAt(i);
      }
      //retornamos count para ver los nuevos caracteres ASCII en forma de string
     return count;
    }
    //creamos un prompt que pregunta al usuario que desea realizar 
    var question = prompt("¿Qué deseas realizar? \n 1) cifrar \n 2)descifrar")
    console.log(cipher("ABC"));