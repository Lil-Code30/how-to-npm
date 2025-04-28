import moment from "moment";

const date = document.getElementById("date");
const time = document.getElementById("time");   

setInterval(() => {
    time.textContent = moment().format("hh:mm:ss A");
}, 1000);

date.textContent = moment().format("YYYY-MM-DD");