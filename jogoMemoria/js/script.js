function criarGrid() {
    var container = document.querySelector(".container-grid");

    for(var i = 0; i < 27; i++) {
        var bloco = document.createElement('div');
        bloco.setAttribute('class', 'bloco');
        
        container.appendChild(bloco);
    }
}