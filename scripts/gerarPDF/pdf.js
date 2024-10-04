import { imgData } from '../../scripts/imgBase64Logo/logo65.js';
import { dataAtual } from '../../scripts/dataAtual.js';

function gerarPDF() {
    let assinaturaMotosita = localStorage.getItem('assinaturaMotorista');
    let assinaturaInstrutor = localStorage.getItem('assinaturaInstrutor');
    let data = dataAtual();

    let doc = new jsPDF();

    doc.addImage(imgData, 'JPEG', 10, 10, 90, 20);
    doc.text("ENTREGA TÉCNICA TRANSBEN", 60, 50);

    doc.text(`Eu, ${localStorage.getItem('nomeMotorista')},`, 10, 70);
    doc.text(`declaro ter recebido o veículo da frota ${localStorage.getItem('frota')} e ter sido devidamente orientado pelo`, 10, 77);
    doc.text(`instrutor ${localStorage.getItem('instrutor')} a respeito dos seguintes temas:`, 10, 84);

    // Define a fonte e o estilo "oblique" para todos os textos
    doc.setFontSize(10);

    // Pega a string do storage e faz o parse para transformar em array
    var itens = JSON.parse(localStorage.getItem('segmento')); // Agora é um array de itens
    var listaItens = itens.join(', '); // Junta os itens em uma string única, separados por vírgula

    // Adiciona a lista de itens no PDF sem as aspas e colchetes
    var textOptions = doc.splitTextToSize(listaItens, 190); // Ajusta a largura máxima do texto (190 para manter margens)
    doc.text(textOptions, 10, 95); // Adiciona o texto ajustado

    doc.addImage(assinaturaMotosita, 'JPEG', 10, 220, 50, 50);
    doc.text(`${localStorage.getItem('nomeMotorista')}`, 35, 265);
    doc.text("Assinatura Motorista", 30, 270);

    doc.addImage(assinaturaInstrutor, 'JPEG', 130, 220, 50, 50);
    doc.text(`${localStorage.getItem('instrutor')}`, 155, 265);
    doc.text("Assinatura Instrutor", 150, 270);

    doc.text(`${data}`, 95, 260);
    doc.text("Data", 100, 265);

    doc.save(`termoFrota(${localStorage.getItem('frota')})-(${data})`);
}

var botaoPDF = document.querySelector('.gerarPDFButton');

botaoPDF.addEventListener('click', gerarPDF);
