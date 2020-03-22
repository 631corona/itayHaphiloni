const homeDivPage = document.getElementById('homePage');
const soldiersDivPage = document.getElementById('soldiersPage');
const labsDivPage = document.getElementById('labsPage');
const imagesDivPage = document.getElementById('imagesPage');
const cureDivPage = document.getElementById('curePage');
const isolatedDiv = document.getElementById('isolated');
const atHomeDiv = document.getElementById('soldiersAtHome');

homeDivPage.onclick = () => {
    window.location.href = '../';
};

soldiersDivPage.onclick = () => {
    window.location.href = '../soldiers';
};

labsDivPage.onclick = () => {
    window.location.href = '../labs';
};

imagesDivPage.onclick = () => {
    window.location.href = '../images';
};

cureDivPage.onclick = () => {
    window.location.href = '../cure';
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

setInterval(() => location.reload(), 343000);

let timeout;
document.onmousemove = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => { alert('והבדידות והבדידים  החברים היחידים שנשארו לי'); }, 60000);
};

