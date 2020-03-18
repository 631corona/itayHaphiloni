async function showIsolated() {
    const getSoldiersData = await fetch('http://localhost:3000/soldiers', {
        headers: {
            'Content-Type': 'application-json'
        }
    });

    const soldiersData = await getSoldiersData.json();

    let isolatedSoldiers = [];

    soldiersData.body.soldiers.forEach(soldier => {
        soldier.quarantine === true ? isolatedSoldiers.push(soldier.name) : isolatedSoldiers
    });

    document.getElementById('isolatedDisplay').innerText = isolatedSoldiers;
};

async function showAmountAtHome() {
    const getSoldiersData = await fetch('http://localhost:3000/soldiers', {
        headers: {
            'Content-Type': 'application-json'
        }
    });

    const soldiersData = await getSoldiersData.json();

    let amountAtHome = 0;

    soldiersData.body.soldiers.forEach(soldier => {
        soldier.location === 'HOME' ? amountAtHome++ : amountAtHome
    });

    document.getElementById('atHomeDisplay').innerText = amountAtHome;
};
