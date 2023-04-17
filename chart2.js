var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Male', 'Female', 'Child'],
        datasets: [{
            label: 'GENDER',
            data: [45, 30, 25],
            backgroundColor: [
                'rgba(21, 86, 126, 1)',
                'rgba(255, 83, 99, 1)',
                'rgba(255, 206, 86, 1)',
                
            ],
            borderColor: [
                'rgba(21, 86, 126, 1)',
                'rgba(255, 83, 99, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
