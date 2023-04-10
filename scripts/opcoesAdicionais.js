const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', adicionarSegmento);
});

function adicionarSegmento(event) {
    const checkbox = event.target;
    const segmento = checkbox.value;
  
    let segmentos = JSON.parse(localStorage.getItem('segmento')) || [];
    if (checkbox.checked) {
      segmentos.push(segmento);
    } else {
      segmentos = segmentos.filter(item => item !== segmento);
    }
    localStorage.setItem('segmento', JSON.stringify(segmentos));
  }