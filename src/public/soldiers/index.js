const homeDivPage = document.getElementById('homePage');
const imagesDivPage = document.getElementById('imagesPage');
const labsDivPage = document.getElementById('labsPage');
const isolatedDiv = document.getElementById('isolated');
const atHomeDiv = document.getElementById('soldiersAtHome');

homeDivPage.onclick = () => {
    window.location.href = '../';
};

imagesDivPage.onclick = () => {
    window.location.href = '../images';
};

labsDivPage.onclick = () => {
    window.location.href = '../labs';
};

isolatedDiv.onclick = async () => {
    const getSoldiersData = await fetch('http://localhost:3000/api/soldiers', {
        headers: {
            'Content-Type': 'application-json'
        }
    });

    const soldiersData = await getSoldiersData.json();

    let isolatedSoldiers = [];

    soldiersData.soldiers.forEach(soldier => {
        soldier.quarantine === true ? isolatedSoldiers.push(soldier.name) : isolatedSoldiers
    });

    document.getElementById('isolatedDisplay').innerText = isolatedSoldiers;
};

atHomeDiv.onclick = async () => {
    const getSoldiersData = await fetch('http://localhost:3000/api/soldiers', {
        headers: {
            'Content-Type': 'application-json'
        }
    });

    const soldiersData = await getSoldiersData.json();

    let amountAtHome = 0;

    soldiersData.soldiers.forEach(soldier => {
        soldier.location === 'HOME' ? amountAtHome++ : amountAtHome
    });

    document.getElementById('atHomeDisplay').innerText = amountAtHome;
};

