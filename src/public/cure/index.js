const cureDivPage = document.getElementById('curePage');
const cureButton = document.getElementById('cureButton');

cureButton.onclick = async () => {
    const fireworks = document.getElementById('scene');
    const title = document.getElementById('title');
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

            timer.innerHTML = `cure found!! celebration in ${time} seconds`;

            if (time === 0) {
                clearInterval(test);
                timer.innerHTML = '';
                fireworks.style = 'display:block';
                cureButton.style = 'display:none';
                title.style = 'display:none';
                document.body.style.backgroundColor = 'black';

            }
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