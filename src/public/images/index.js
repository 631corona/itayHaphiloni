const soldiersDivPage = document.getElementById('soldiersPage');
const homeDivPage = document.getElementById('homePage');
const labsDivPage = document.getElementById('labsPage');

soldiersDivPage.onclick = () => {
    window.location.href = '../soldiers';
};

labsDivPage.onclick = () => {
    window.location.href = '../labs';
};

homeDivPage.onclick = () => {
    window.location.href = '../';
};
