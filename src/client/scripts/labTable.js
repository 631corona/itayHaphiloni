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

    console.log(sortedLabs);

    let mappedLabs = [];
    sortedLabs.forEach((lab) => {
        const labInfo = [lab.name, `${lab.progress_percentile}%`, lab.id, lab.status];
        mappedLabs.push(labInfo);
    });


    const data = new google.visualization.DataTable();
    data.addColumn('string', 'lab name');
    data.addColumn('string', 'cure progress');
    data.addColumn('number', 'lab id');
    data.addColumn('string', 'lab status');
    data.addRows(mappedLabs);

    const options = {
        'width': 1000,
        'height': 1000
    };

    const table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(data, options);
}