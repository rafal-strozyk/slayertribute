window.addEventListener('DOMContentLoaded', () => {
    function updateDate() {
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let hours = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
        let minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
        let seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
        document.getElementById("data").innerHTML = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    }
    updateDate();
    setInterval(updateDate, 1000);
});