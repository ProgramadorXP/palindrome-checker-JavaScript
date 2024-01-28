const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

//Expresión regular para solo letras.
const expresion = /[a-z0-9]+$/i;

/*Recibimos el arreglo validado para comprobar si es
o no Palindrome.*/
//Despues retornamos el resultado al la funcion del click.
const esPalindrome = (array, textoUsuario) => {
    //Creamos un copia del arreglo pero invertido.
    const arrayReverse = array.toReversed();
    if(array.join("").toLowerCase() === arrayReverse.join("").toLowerCase()) {
        //Limpiamos el valor del input
        textInput.value = "";
        //Mostramos resultado en parrafo
        return result.innerHTML = `
            <p class="text"><strong>${textoUsuario}</strong> is a palindrome</p>
        `;
    } else {
        //Limpiamos el valor del input
        textInput.value = "";
        //Mostramos resultado en parrafo
        return result.innerHTML = `
            <p class="text"><strong>${textoUsuario}</strong> is not a palindrome</p>
        `;
    }
};
const textoInput = () => {
    //Checar si esta vacío o no el input
    if(textInput.value !== "") {
        //obtener el valor del input
        const arrayUsuario = textInput.value.split("");
        //crear un nuevo arreglo con solo letras.
        const arrayFinal = arrayUsuario.filter((letra) => expresion.test(letra))
        //Pasandole el arrayFinal
        esPalindrome(arrayFinal, arrayUsuario.join(""));
    } else {
        //Si no han ingresado ningun valor se muestra el alert.
        alert("Please input a value");
    }
};
//Validando acción cuando se da click.
const onSubmit = (e) => {
    //Prevenir que se refresque la página
    e.preventDefault();
    /*Mandamos llamar la funcion que se encarga de checar si
    el usuario escribio algo y crear el texto en arreglo.*/
    textoInput();
};

checkButton.addEventListener('click', onSubmit);
