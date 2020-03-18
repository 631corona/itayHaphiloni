async function getLabsProgress() {
    const getLabsData = await fetch('http://localhost:3000/labs', {
        headers: {
            'Content-Type': 'application-json'
        }
    });

    const labsData = await getLabsData.json();

    const sortedLabs = labsData.labs.sort((a, b) => a.name.localeCompare(b.firstname));

    sortedLabs.forEach(lab => {
        document.getElementById('labsProgressDisplay').innerHTML += JSON.stringify(lab);
    });

};
