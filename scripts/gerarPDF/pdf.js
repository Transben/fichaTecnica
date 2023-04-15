import { imgData } from '../../scripts/imgBase64Logo/logo65.js';
import { dataAtual } from '../../scripts/dataAtual.js';

function gerarPDF() {

    let assinaturaMotosita = localStorage.getItem('assinaturaMotorista')
    let assinaturaInstrutor = localStorage.getItem('assinaturaInstrutor')

    let data = dataAtual();

    let doc = new jsPDF();

    doc.addImage(imgData, 'JPEG', 10, 10, 90, 20);
    doc.text("ENTREGA TÉCNICA TRANSBEN", 60, 50);

    doc.text(`Eu ${localStorage.getItem('nomeMotorista')} declaro ter recebido a frota ${localStorage.getItem('frota')} e fui devidamente orientado pelo`, 10, 70);
    doc.text(`instrutor ${localStorage.getItem('instrutor')}, a respeito dos seguintes temas:`, 10, 77);

    // Define a fonte e o estilo "oblique" para todos os textos
    doc.setFontSize(10);

    // Adiciona uma lista de itens com 5 pontos de espaço entre cada item
    var y = 85; // define a posição y inicial
    var itens = localStorage.getItem('segmento').split(',');
    for (var i = 0; i < itens.length; i++) {
        doc.text(" | " + itens[i], 10, y);
        y += 7; // adiciona 5 pontos à posição y para o próximo item
    }

    doc.addImage(assinaturaMotosita, 'JPEG', 10, 220, 50, 50);
    doc.text("Assinatura Motorista", 30, 265);

    doc.addImage(assinaturaInstrutor, 'JPEG', 130, 220, 50, 50);
    doc.text("Assinatura Instrutor", 150, 265);

    doc.text(`${data}`, 95, 260);
    doc.text("Data", 100, 265);
    
    doc.save(`termoFrota(${localStorage.getItem('frota')})-(${data})`);
}

var botaoPDF = document.querySelector('.gerarPDFButton');
botaoPDF.addEventListener('click', gerarPDF);
