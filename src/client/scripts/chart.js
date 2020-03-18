google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
    const getLabsData = await fetch('http://localhost:3000/labs', {
        headers: {
            'Content-Type': 'application-json'
        }
    });

    const labsData = await getLabsData.json();

    let mappedLabs = [];
    labsData.labs.forEach((lab) => {
        const labInfo = [lab.name, lab.progress_percentile];
        mappedLabs.push(labInfo);
    });

    // Create the data table.
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'lab name');
    data.addColumn('number', 'cure progress');
    data.addRows(mappedLabs);

    // Set chart options
    const options = {
        'title': 'Cure progress in labs',
        'width': 1000,
        'height': 1000
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}