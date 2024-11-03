document.getElementById('generateReportBtn').addEventListener('click', function() {
    const reportType = document.getElementById('reportType').value;
    const reportOutput = document.getElementById('reportOutput');

    // Clear previous report output
    reportOutput.innerHTML = '';

    // Generate report based on the selected type
    let reportContent = '';

    switch(reportType) {
        case 'sales':
            reportContent = `
                <h3>Sales Report</h3>
                <p>Total Sales: $10,000</p>
                <p>Number of Transactions: 250</p>
                <p>Top Selling Product: Product A</p>
            `;
            break;
        case 'user-activity':
            reportContent = `
                <h3>User Activity Report</h3>
                <p>Total Users