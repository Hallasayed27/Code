var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Patients',
            data: [100, 150, 200, 250, 300, 500, 600, 300, 100, 900, 1000, 1500],
            backgroundColor: [
                'rgba(255, 83, 99, 1)'
            ],
            borderColor: 'rgba(255, 83, 99, 1)',
            borderWidth: 1.5
        }]
    },
    options: {
        responsive: true
    }
});