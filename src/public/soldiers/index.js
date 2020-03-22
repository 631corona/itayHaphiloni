const isolatedDiv = document.getElementById('isolated');
const atHomeDiv = document.getElementById('soldiersAtHome');

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

