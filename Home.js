const curdate = document.getElementById("date");
const tempstat = "clouds";
const getcurrentday = () => {
    let currenttime = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('day').innerText = weekday[currenttime.getDay()];
    console.log(weekday[currenttime.getDay()]);
};
getcurrentday();

const getcurrtime = () => {
    var today = new Date();

    if (today.getHours() > 12) {
        var time = today.getHours() + ":" + today.getMinutes() + ' PM';
    } else {
        var time = today.getHours() + ":" + today.getMinutes() + ' AM';
    }
    document.getElementById("time").innerText = time;

    // for date;

    var today = new Date();
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var date = today.getDate() + ' ' + mS[today.getMonth()];
    document.getElementById("date").innerText = date;

};
getcurrtime();