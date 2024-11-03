const salesCtx = document.getElementById('salesChart').getContext('2d');
const userActivityCtx = document.getElementById('userActivityChart').getContext('2d');

// Sales Chart
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales ($)',
            data: [12000, 19000, 30000, 50000, 45000, 60000],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// User Activity Chart
const userActivityChart = new Chart(userActivityCtx, {
    type: 'bar',
    data: {
        labels: ['Active Users', 'New Users', 'Returning Users'],
        datasets