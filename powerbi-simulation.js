document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { category: 'Malware', threats: 145 },
        { category: 'Phishing', threats: 89 },
        { category: 'DDoS', threats: 32 },
        { category: 'Insider', threats: 18 },
        { category: 'Zero-day', threats: 7 },
        { category: 'Ransomware', threats: 41 }
    ];

    const chart = document.createElement('div');
    chart.style.display = 'flex';
    chart.style.alignItems = 'flex-end';
    chart.style.height = '300px';
    chart.style.padding = '20px';
    chart.style.backgroundColor = '#f0f0f0';
    chart.style.border = '1px solid black';

    const maxThreats = Math.max(...data.map(item => item.threats));

    data.forEach(item => {
        const bar = document.createElement('div');
        bar.style.width = '60px';
        bar.style.marginRight = '10px';
        bar.style.backgroundColor = getColor(item.category);
        bar.style.height = `${(item.threats / maxThreats) * 250}px`;
        bar.title = `${item.category}: ${item.threats} threats`;

        const label = document.createElement('div');
        label.textContent = item.category;
        label.style.textAlign = 'center';
        label.style.marginTop = '5px';
        label.style.fontSize = '12px';
        label.style.transform = 'rotate(-45deg)';
        label.style.whiteSpace = 'nowrap';

        const count = document.createElement('div');
        count.textContent = item.threats;
        count.style.textAlign = 'center';
        count.style.marginBottom = '5px';
        count.style.fontWeight = 'bold';

        const column = document.createElement('div');
        column.style.display = 'flex';
        column.style.flexDirection = 'column';
        column.style.alignItems = 'center';
        column.appendChild(count);
        column.appendChild(bar);
        column.appendChild(label);

        chart.appendChild(column);
    });

    document.getElementById('powerbi-simulation').appendChild(chart);
});

function getColor(category) {
    const colors = {
        'Malware': '#FF6384',
        'Phishing': '#36A2EB',
        'DDoS': '#FFCE56',
        'Insider': '#4BC0C0',
        'Zero-day': '#9966FF',
        'Ransomware': '#FF9F40'
    };
    return colors[category] || '#000000';
}
