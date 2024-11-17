function calcularComparacao() {
    // Obtendo valores dos inputs
    const consumoCombustao = parseFloat(document.getElementById('consumoCombustao').value);
    const precoCombustivel = parseFloat(document.getElementById('precoCombustivel').value);
    const kmMensalCombustao = parseFloat(document.getElementById('kmMensalCombustao').value);
    
    const consumoEletrico = parseFloat(document.getElementById('consumoEletrico').value);
    const precoEnergia = parseFloat(document.getElementById('precoEnergia').value);
    const kmMensalEletrico = parseFloat(document.getElementById('kmMensalEletrico').value);

    // Validando inputs
    if (!validarInputs(consumoCombustao, precoCombustivel, kmMensalCombustao, 
                      consumoEletrico, precoEnergia, kmMensalEletrico)) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    // Calculando custos mensais
    const custoCombustao = (kmMensalCombustao / consumoCombustao) * precoCombustivel;
    const custoEletrico = (kmMensalEletrico * (consumoEletrico/100)) * precoEnergia;
    
    // Calculando economia
    const economia = custoCombustao - custoEletrico;
    const economiaAnual = economia * 12;
    
    // Calculando redução de CO2
    const reducaoCO2 = calcularReducaoCO2(kmMensalCombustao);

    // Exibindo resultados
    mostrarResultados(custoCombustao, custoEletrico, economia, economiaAnual, reducaoCO2);
}

function validarInputs(...inputs) {
    return inputs.every(input => !isNaN(input) && input > 0);
}

function calcularReducaoCO2(kmMensal) {
    // Média de emissão de CO2 por km para carros a combustão (em kg)
    const emissaoCO2PorKm = 0.12;
    return kmMensal * emissaoCO2PorKm;
}

function mostrarResultados(custoCombustao, custoEletrico, economia, economiaAnual, reducaoCO2) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('d-none');
    
    const economiaClass = economia > 0 ? 'economia-positiva' : 'economia-negativa';
    
    resultadoDiv.innerHTML = `
        <h3 class="mb-4">Resultados da Comparação</h3>
        <div class="row">
            <div class="col-md-6">
                <p><strong>Custo Mensal (Combustão):</strong> R$ ${custoCombustao.toFixed(2)}</p>
                <p><strong>Custo Mensal (Elétrico):</strong> R$ ${custoEletrico.toFixed(2)}</p>
            </div>
            <div class="col-md-6">
                <p><strong>Economia Mensal:</strong> <span class="${economiaClass}">R$ ${economia.toFixed(2)}</span></p>
                <p><strong>Economia Anual:</strong> <span class="${economiaClass}">R$ ${economiaAnual.toFixed(2)}</span></p>
            </div>
        </div>
        <div class="mt-3">
            <p><strong>Redução Mensal de CO2:</strong> ${reducaoCO2.toFixed(2)} kg</p>
            <p><strong>Redução Anual de CO2:</strong> ${(reducaoCO2 * 12).toFixed(2)} kg</p>
        </div>
        <div class="mt-4 p-3 bg-light border rounded">
            <p class="mb-3">Com uma economia anual de <span class="${economiaClass}">R$ ${economiaAnual.toFixed(2)}</span> e redução de ${(reducaoCO2 * 12).toFixed(2)} kg de CO2, que tal conhecer alguns carros elétricos disponíveis no mercado? Temos uma seleção especial de veículos que podem te ajudar nessa transição para uma mobilidade mais sustentável!</p>
            <a href="veiculos.html" class="btn btn-success">
                Conhecer Veículos Elétricos
            </a>
        </div>
    `;
}

function calcularComparacaoMoto() {
    // Obtendo valores dos inputs
    const consumoCombustao = parseFloat(document.getElementById('consumoCombustaoMoto').value);
    const precoCombustivel = parseFloat(document.getElementById('precoCombustivelMoto').value);
    const kmMensalCombustao = parseFloat(document.getElementById('kmMensalCombustaoMoto').value);
    
    const consumoEletrico = parseFloat(document.getElementById('consumoEletricoMoto').value);
    const precoEnergia = parseFloat(document.getElementById('precoEnergiaMoto').value);
    const kmMensalEletrico = parseFloat(document.getElementById('kmMensalEletricoMoto').value);

    // Validando inputs
    if (!validarInputs(consumoCombustao, precoCombustivel, kmMensalCombustao, 
                      consumoEletrico, precoEnergia, kmMensalEletrico)) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    // Calculando custos mensais
    const custoCombustao = (kmMensalCombustao / consumoCombustao) * precoCombustivel;
    const custoEletrico = (kmMensalEletrico * (consumoEletrico/100)) * precoEnergia;
    
    // Calculando economia
    const economia = custoCombustao - custoEletrico;
    const economiaAnual = economia * 12;
    
    // Calculando redução de CO2 (usando um fator menor para motos)
    const reducaoCO2 = calcularReducaoCO2Moto(kmMensalCombustao);

    // Exibindo resultados
    mostrarResultadosMoto(custoCombustao, custoEletrico, economia, economiaAnual, reducaoCO2);
}

function calcularReducaoCO2Moto(kmMensal) {
    // Média de emissão de CO2 por km para motos (em kg) - geralmente menor que carros
    const emissaoCO2PorKm = 0.07;
    return kmMensal * emissaoCO2PorKm;
}

function mostrarResultadosMoto(custoCombustao, custoEletrico, economia, economiaAnual, reducaoCO2) {
    const resultadoDiv = document.getElementById('resultadoMoto');
    resultadoDiv.classList.remove('d-none');
    
    const economiaClass = economia > 0 ? 'economia-positiva' : 'economia-negativa';
    
    resultadoDiv.innerHTML = `
        <h3 class="mb-4">Resultados da Comparação</h3>
        <div class="row">
            <div class="col-md-6">
                <p><strong>Custo Mensal (Combustão):</strong> R$ ${custoCombustao.toFixed(2)}</p>
                <p><strong>Custo Mensal (Elétrico):</strong> R$ ${custoEletrico.toFixed(2)}</p>
            </div>
            <div class="col-md-6">
                <p><strong>Economia Mensal:</strong> <span class="${economiaClass}">R$ ${economia.toFixed(2)}</span></p>
                <p><strong>Economia Anual:</strong> <span class="${economiaClass}">R$ ${economiaAnual.toFixed(2)}</span></p>
            </div>
        </div>
        <div class="mt-3">
            <p><strong>Redução Mensal de CO2:</strong> ${reducaoCO2.toFixed(2)} kg</p>
            <p><strong>Redução Anual de CO2:</strong> ${(reducaoCO2 * 12).toFixed(2)} kg</p>
        </div>
        <div class="mt-4 p-3 bg-light border rounded">
            <p class="mb-3">Impressionante! Com uma economia anual de <span class="${economiaClass}">R$ ${economiaAnual.toFixed(2)}</span> e redução de ${(reducaoCO2 * 12).toFixed(2)} kg de CO2, você pode fazer uma grande diferença para o meio ambiente. Conheça nossa seleção de motos elétricas e comece sua jornada rumo à mobilidade sustentável!</p>
            <a href="veiculos.html#motos" class="btn btn-success">
                Conhecer Motos Elétricas
            </a>
        </div>
    `;
} 