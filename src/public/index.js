const soldiersDivPage = document.getElementById('soldiersPage');
const imagesDivPage = document.getElementById('imagesPage');
const labsDivPage = document.getElementById('labsPage');
const cureDivPage = document.getElementById('curePage');

soldiersDivPage.onclick = () => {
    window.location.href = 'soldiers';
};

labsDivPage.onclick = () => {
    window.location.href = 'labs';
};

imagesDivPage.onclick = () => {
    window.location.href = 'images';
};

cureDivPage.onclick = () => {
    window.location.href = 'cure';
};

setInterval(() => location.reload(), 343000);

let timeout;
document.onmousemove = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => { alert('והבדידות והבדידים  החברים היחידים שנשארו לי'); }, 60000);
};

