async function getCureStatus() {
    const getCureData = await fetch('http://localhost:3000/cure/found', {
        headers: {
            'Content-Type': 'application-json'
        }
    });

    const cureData = await getCureData.json();

    const timer = document.getElementById('timer');
    console.log(cureData.is_found);

    if (cureData.is_found) {
        let time = 7;
        let test = setInterval(myTimer, 1000);
        function myTimer() {

            timer.innerHTML = `cure found!! celebration in ${time} seconds`;

            if (time === 0) {
                clearInterval(test);
                alert('celebration!!!!');
            }
            
            time--;
        };
    }
};
