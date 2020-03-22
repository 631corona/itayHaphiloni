setInterval(() => location.reload(), 343000);

let timeout;
document.onmousemove = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => { alert('והבדידות והבדידים  החברים היחידים שנשארו לי'); }, 60000);
};
