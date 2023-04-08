
/* ALERTA DE SALVO DO MOTORISTA */
let letModalSalvo = document.querySelector('.addMotorista');
letModalSalvo.addEventListener('click', () => {

    let modal = document.querySelector('.containerAlertSave');
    let text = document.querySelector('.textoAlert');
    let containerModal = document.querySelector('.containerAlert')

    if(localStorage.getItem('assinaturaMotorista') !== null){

        modal.style.display = 'block'
        containerModal.style.background = 'green'
        text.textContent = 'Salvo com sucesso!'

        setTimeout(() => {
            modal.style.display = 'none'
        }, 500)
    }

    if(localStorage.getItem('assinaturaMotorista') == null){

        modal.style.display = 'block'
        containerModal.style.background = 'red'
        text.textContent = 'Erro ao salvar!'

        setTimeout(() => {
            modal.style.display = 'none'
        }, 500)
    }
})

/* ALERTA DE SALVO DO INSTRUTOR */
let letModalSalvoInstrutor = document.querySelector('.addInstrutor');
letModalSalvoInstrutor.addEventListener('click', () => {

    let modal = document.querySelector('.containerAlertSave');
    let text = document.querySelector('.textoAlert');
    let containerModal = document.querySelector('.containerAlert')

    if(localStorage.getItem('assinaturaInstrutor') !== null){

        modal.style.display = 'block'
        containerModal.style.background = 'green'
        text.textContent = 'Salvo com sucesso!'

        setTimeout(() => {
            modal.style.display = 'none'
        }, 500)
    }

    if(localStorage.getItem('assinaturaInstrutor') == null){

        modal.style.display = 'block'
        containerModal.style.background = 'red'
        text.textContent = 'Erro ao salvar!'

        setTimeout(() => {
            modal.style.display = 'none'
        }, 500)
    }
})