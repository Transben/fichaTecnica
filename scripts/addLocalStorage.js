
/* CRIA NO LOCALSTORE O VALOR DO INPUT DE FROTA */
let addNomeMotorista = document.querySelector('.nomeMotorista');
addNomeMotorista.addEventListener('blur', addLocalStorageNomeMotorista);
function addLocalStorageNomeMotorista(){
    let nomeMotorista = document.querySelector('.nomeMotorista').value;
    localStorage.setItem('nomeMotorista', nomeMotorista);
}

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