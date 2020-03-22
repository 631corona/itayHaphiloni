const soldiersDivPage = document.getElementById('soldiersPage');
const imagesDivPage = document.getElementById('imagesPage');
const labsDivPage = document.getElementById('labsPage');

soldiersDivPage.onclick = () => {
    window.location.href = '../soldiers';
};

imagesDivPage.onclick = () => {
    window.location.href = '../images';
};

labsDivPage.onclick = () => {
    window.location.href = '../labs';
};
