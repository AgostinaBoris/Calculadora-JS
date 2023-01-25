window.addEventListener('load', ()=> {
// ESCUCHAMOS CUANDO SE CARGA EL DOCUMENTO

// CREAMOS 2 CONSTANTES Y GUARDAMOS LOS ELEMENTOS Q NECESITAMOS
    const display = document.querySelector('.calculator-display');
     const keypadButtons = document.getElementsByClassName('keypad-button');

    //  CREAMOS OTRA CONST PARA CONVERTIR EL HTMLCOLLECTION A ARRAY
    const keypadButtonsArray = Array.from(keypadButtons);

    // ITERAMOS POR EL ARRAY D BOTONES
    keypadButtonsArray.forEach( (button) => {

        // A CADA BOTON AGREGAMOS UN LISTENER
        button.addEventListener('click', ()=> {  
            calculadora(button, display)
        })
    })
})

function calculadora(button, display){
    switch (button.innerHTML){
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML)
}
// Toma el String, resuelve y guarda en el innerhtml del display

function actualizar(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}