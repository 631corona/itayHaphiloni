window.onload = async () => {
    const getCureData = await fetch('http://localhost:3000/cure/found', {
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
        timer.innerHTML = 'cure has not been founded yet';
    }
};
