function assinaturaMotorista() {
    var canvas = document.getElementById('canvas');
    var signaturePad = new SignaturePad(canvas);
    canvas.style.backgroundColor = "#d3d3d3";

    canvas.addEventListener('touchstart', function (e) {
        signaturePad.handleTouchStart(e.touches[0]);
    });

    canvas.addEventListener('touchmove', function (e) {
        signaturePad.handleTouchMove(e.touches[0]);
    });

    canvas.addEventListener('touchend', function (e) {
        signaturePad.handleTouchEnd(e.changedTouches[0]);
    });

    /* LIMPA A IMAGEM E APAGA DO LOCALSTORAGE */
    var botaoLimpar = document.getElementById('limparAssinaturaMotorista');
    botaoLimpar.addEventListener('click', limparAssinatura);
    function limparAssinatura() {
        signaturePad.clear();
        localStorage.setItem('assinaturaMotorista', '')
    }

    /* SALVA IMAGEM NO LOCALSTAGE EM BASE64 */
    var botaoSalvar = document.querySelector('.addMotorista');
    botaoSalvar.addEventListener('click', salvarAssinaturaMotorista);
    function salvarAssinaturaMotorista() {
        var dataURLMotorista = signaturePad.toDataURL();
        /* LIMPAMOS O VALUE SETANDO UM VALOR VAZIO, MUDEI A ABORAGEM DE removeItem */
        localStorage.setItem('assinaturaMotorista', dataURLMotorista);
    }
}

function assinaturaInstrutor() {
    var canvas = document.getElementById('canvasInstrutor');
    var signaturePad = new SignaturePad(canvas);
    canvas.style.backgroundColor = "#d3d3d3";

    canvas.addEventListener('touchstart', function (e) {
        signaturePad.handleTouchStart(e.touches[0]);
    });

    canvas.addEventListener('touchmove', function (e) {
        signaturePad.handleTouchMove(e.touches[0]);
    });

    canvas.addEventListener('touchend', function (e) {
        signaturePad.handleTouchEnd(e.changedTouches[0]);
    });

    /* LIMPA A IMAGEM E APAGA DO LOCALSTORAGE */
    var botaoLimpar = document.getElementById('limparAssinaturaInstrutor');
    botaoLimpar.addEventListener('click', limparAssinatura);
    function limparAssinatura() {
        signaturePad.clear();
        /* LIMPAMOS O VALUE SETANDO UM VALOR VAZIO, MUDEI A ABORAGEM DE removeItem */
        localStorage.setItem('assinaturaInstrutor', '')
    }

    /* SALVA IMAGEM NO LOCALSTAGE EM BASE64 */
    var botaoSalvar = document.querySelector('.addInstrutor');
    botaoSalvar.addEventListener('click', salvarAssinaturaInstrutor);
    function salvarAssinaturaInstrutor() {
        var dataURLInstrutor = signaturePad.toDataURL();
        localStorage.setItem('assinaturaInstrutor', dataURLInstrutor);
    }
}

window.onload = function () {
    assinaturaMotorista()
    assinaturaInstrutor()
}