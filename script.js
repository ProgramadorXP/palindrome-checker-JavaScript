const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

//Funcion para inyectar el texto del input en el div id="result".
const resultFunction = (texto) => {
    return result.innerHTML = `
        <p class="text"><strong>${texto}</strong> is a palindrome</p>
    `;
};
//VALIDANDO ACCION CUANDO SE DA CLICK
const onSubmit = (e) => {
    e.preventDefault();
    const texto = textInput.value;
    resultFunction(texto)
};

checkButton.addEventListener('click', onSubmit);
