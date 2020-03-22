const soldiersDivPage = document.getElementById('soldiersPage');
const imagesDivPage = document.getElementById('imagesPage');
const labsDivPage = document.getElementById('labsPage');

soldiersDivPage.onclick = () => {
    window.location.href = 'soldiers';
};

imagesDivPage.onclick = () => {
    window.location.href = 'images';
};

labsDivPage.onclick = () => {
    window.location.href = 'labs';
};

let timeout;
document.onmousemove = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => { alert('והבדידות והבדידים  החברים היחידים שנשארו לי'); }, 60000);
};

setInterval(()=> location.reload(),343000);

window.onload = async () => {
    const getCureData = await fetch('http://localhost:3000/api/cure/found', {
        headers: {
            'Content-Type': 'application-json'
        }
    });

    const cureData = await getCureData.json();

    const timer = document.getElementById('timer');

    if (cureData.is_found) {
        let time = 7;
        let test = setInterval(myTimer, 1000);

        function myTimer() {
            if (time === 0) {
                clearInterval(test);
                alert('celebration!!!!');
            }

            timer.innerHTML = `cure found!! celebration in ${time} seconds`;

            time--;
        };
    }

    else {
        timer.innerHTML = 'cure has not been found yet';
    }
};
