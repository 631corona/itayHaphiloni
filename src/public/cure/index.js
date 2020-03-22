const cureDivPage = document.getElementById('curePage');
const cureButton = document.getElementById('cureButton');

cureButton.onclick = async () => {
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

setInterval(() => location.reload(), 343000);

let timeout;
document.onmousemove = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => { alert('והבדידות והבדידים  החברים היחידים שנשארו לי'); }, 60000);
};