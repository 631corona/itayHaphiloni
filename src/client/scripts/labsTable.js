google.charts.load('current', { 'packages': ['table'] });

google.charts.setOnLoadCallback(drawTable);

async function drawTable() {
    const getLabsData = await fetch('http://localhost:3000/labs', {
        headers: {
            'Content-Type': 'application-json'
        }
    });

    const labsData = await getLabsData.json();

    const sortedLabs = labsData.labs.sort((a, b) => a.name.localeCompare(b.name));

    let mappedLabs = [];
    sortedLabs.forEach((lab) => {
        const labInfo = [lab.name, `${lab.progress_percentile}%`, lab.id, lab.status];
        mappedLabs.push(labInfo);
    });

    const data = new google.visualization.DataTable();
    data.addColumn('string', 'שם המעדה');
    data.addColumn('string', 'התקדמות לחיסון');
    data.addColumn('number', 'מזהה מעבדה');
    data.addColumn('string', 'מצב החיסון');
    data.addRows(mappedLabs);

    const options = {
        'width': 500,
        'height': 500
    };

    const table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(data, options);
}