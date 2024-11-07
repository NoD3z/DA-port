document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { month: 'Jan', performance: 85 },
        { month: 'Feb', performance: 88 },
        { month: 'Mar', performance: 91 },
        { month: 'Apr', performance: 89 },
        { month: 'May', performance: 94 },
        { month: 'Jun', performance: 96 }
    ];

    const chart = document.createElement('div');
    chart.style.display = 'flex';
    chart.style.alignItems = 'flex-end';
    chart.style.height = '200px';
    chart.style.padding = '20px';
    chart.style.backgroundColor = '#f0f0f0';
    chart.style.border = '1px solid black';

    data.forEach(item => {
        const bar = document.createElement('div');
        bar.style.width = '40px';
        bar.style.marginRight = '10px';
        bar.style.backgroundColor = '#0078D4';
        bar.style.height = `${item.performance}px`;
        bar.title = `${item.month}: ${item.performance}%`;

        const label = document.createElement('div');
        label.textContent = item.month;
        label.style.textAlign = 'center';
        label.style.marginTop = '5px';

        const column = document.createElement('div');
        column.appendChild(bar);
        column.appendChild(label);

        chart.appendChild(column);
    });

    document.getElementById('powerbi-simulation').appendChild(chart);
});
