/* GERA O ARRAY INICIAL DE OPÇÕES PADROES NA INICIALIZAÇÃO DA PAGINA */

function getCaminhao(){
    var Volvo = [
        "PNEU",
        "PREENCHIMENTO DO TACÓGRAFO",
        "KM DE REVISÕES","MÉDIA",
        "TANQUE PRINCIPAL E AUXILIAR",
        "BUJÕES DE AR",
        "FREIO MOTOR",
        "PILOTO AUTOMÁTICO",
        "CONFIGURAÇÕES DO COMPUTADOR DE BORDO",
        "EQUIPAMENTO REBOQUE",
    ]
    localStorage.setItem('segmento', JSON.stringify(Volvo))
}
getCaminhao()
