
/* CRIA NO LOCALSTORE O VALOR DO INPUT DE FROTA */
let addFrota = document.querySelector('.frotaAtual');
addFrota.addEventListener('blur', addLocalStorageFrota);
function addLocalStorageFrota(){
    let frota = document.querySelector('.frotaAtual').value;
    localStorage.setItem('frota', frota);
}

/* CRIA NO LOCALSTORE O VALOR DO INPUT DE INSTRUTOR */
let addNomeInstrutor = document.querySelector('.instrutorResponsavel');
addNomeInstrutor.addEventListener('blur', addLocalStorageinstrutor);
function addLocalStorageinstrutor(){
    let instrutor = document.querySelector('.instrutorResponsavel').value;
    localStorage.setItem('instrutor', instrutor);
}