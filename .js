// Dados fictícios para o gráfico (substitua com dados reais)
const dadosAcidentes = {
    labels: ['2019', '2020', '2021', '2022', '2023'], // Anos
    datasets: [{
        label: 'Número de Acidentes de Trabalho (em milhares)',
        data: [720, 750, 800, 850, 900], // Número de acidentes por ano
        backgroundColor: 'rgba(52, 152, 219, 0.2)', // Cor de fundo das barras
        borderColor: 'rgba(52, 152, 219, 1)', // Cor da borda das barras
        borderWidth: 1
    }]
};

// Configurações do gráfico
const config = {
    type: 'bar', // Tipo de gráfico (barras)
    data: dadosAcidentes,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Criando o gráfico
window.onload = function() {
    const ctx = document.getElementById('graficoAcidentes').getContext('2d');
    new Chart(ctx, config);
};
