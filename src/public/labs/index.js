const soldiersDivPage = document.getElementById('soldiersPage');
const imagesDivPage = document.getElementById('imagesPage');
const homeDivPage = document.getElementById('homePage');

google.charts.load('current', { 'packages': ['table'] });
google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);

soldiersDivPage.onclick = () => {
    window.location.href = '../soldiers';
};

imagesDivPage.onclick = () => {
    window.location.href = '../images';
};

homeDivPage.onclick = () => {
    window.location.href = '../';
};

async function drawChart() {
    const getLabsData = await fetch('http://localhost:3000/api/labs', {
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

    const data = new google.visualization.DataTable();
    data.addColumn('string', 'lab name');
    data.addColumn('number', 'cure progress');
    data.addRows(mappedLabs);

    const options = {
        'title': 'Cure progress in labs',
        'width': 500,
        'height': 500
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};

async function drawTable() {
    const getLabsData = await fetch('http://localhost:3000/api/labs', {
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
};
