const displaySoldiersData = () => {
    const soldiersData = document.getElementById('soldiersData');

    if (soldiersData.style.display === "none") {
        soldiersData.style.display = "block";
    }
    else {
        soldiersData.style.display = "none";
    }
};

const displayImages = () => {
    const images = document.getElementById('images');

    if (images.style.display === "none") {
        images.style.display = "block";
    }
    else {
        images.style.display = "none";
    }
};

const displayLabsData = () => {
    const graphs = document.getElementById('graphs');

    if (graphs.style.display === "none") {
        graphs.style.display = "block";
    }
    else {
        graphs.style.display = "none";
    }
};