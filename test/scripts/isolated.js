// import { getSoldiersData } from './routes/soldiers';

// export function showIsolated() {
//     const soldiersData = getSoldiersData();
//     let numberOfIsolated;

//     soldiersData.soldiers.foreach(soldier => {
//         soldier.location === 'HOME' ? numberOfIsolated++ : numberOfIsolated
//     });

//     document.getElementById('isolated').innerText(numberOfIsolated);

// };

async function showIsolated() {
    // var xhr = new XMLHttpRequest();

    // xhr.open('GET','https://localhost:3000/soldiers');
    // xhr.send();

    const getSoldiersData = fetch('/soldiers')

    // console.log(getSoldiersData);

    // let isolatedSoldiers = [];

    // data.body.soldiers.forEach(soldier => {
    //     soldier.quarantine === true ? isolatedSoldiers.push(soldier.name) : isolatedSoldiers
    // });

    // document.getElementById('isolated').innerText = isolatedSoldiers;
};
