// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// 1 - Adicione um evento click no elemento a que possui o id href.
// Na função do evento, implemente o método .preventDefault() para
// previnir o comportamento padrão do elemento. Ou seja, ao clicar
// no link, nada deve acontecer.

function hrefLink(event) {
    event.preventDefault();
}
HREF_LINK.addEventListener('click', hrefLink);

// 2 - Adicione um evento click no elemento checkbox que possui o id
// input-checkbox . Na função do evento, implemente o método
// .preventDefault() para previnir o comportamento padrão do elemento.
// Ou seja, ao clicar na caixinha, nada deve acontecer.

function inputCheckbox(event) {
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', inputCheckbox);

// 3 - Adicione um evento keypress no elemento input type="text" que
// possui o id input-text . Na função do evento, implemente o método
// .preventDefault() de forma que somente o caractere a
// (letra 'a' minúscula) possa ser digitado na caixinha.
// ( dica: para capturar a tecla digitada, utilize o event.key).

function inputText(event) {
    let test = event.key;
    if (test !== "a") {
        event.preventDefault();
    }
    console.log(test);
    // event.preventDefault()
}
INPUT_TEXT.addEventListener('keypress', inputText);

// referências:
// https://www.w3schools.com/jsref/event_key_key.asp
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://www.w3schools.com/jsref/event_preventdefault.asp
