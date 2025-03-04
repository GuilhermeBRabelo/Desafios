function calcularTempoDecorrido() {
    const dataInicial = new Date(2024, 0, 24); // 24 de janeiro de 2024 (Mês começa do 0)
    const agora = new Date();
    
    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Ajuste para quando os dias forem negativos
    if (dias < 0) {
        meses -= 1;
        let ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += ultimoMes.getDate();
    }

    // Ajuste para quando os meses forem negativos
    if (meses < 0) {
        anos -= 1;
        meses += 12;
    }

    document.getElementById('tempo-decorrido').textContent = 
        `${anos} Ano, ${meses} Mês, ${dias} Dia, ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// Atualiza imediatamente e depois a cada segundo
calcularTempoDecorrido();
setInterval(calcularTempoDecorrido, 1000);