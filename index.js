const http = require("http");
const fs = require("fs");
const homefile = fs.readFileSync("home.html", "utf-8");
var requests = require("requests");

const replaceval = (tempval, orgval) => {
    let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);
    temperature = temperature.replace("{%location%}", orgval.name);
    return temperature;
};

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=49505ef46d6c54582837e1217809ff32")
            .on('data', function(chunk) {
                const objdata = JSON.parse(chunk);
                const arr = [objdata];
                // console.log(arr);
                const realtimedata = arr
                    .map((val) => replaceval(homefile, val))
                    .join("");
                console.log(realtimedata);
                res.write(realtimedata);
            })
            .on('end', function(err) {
                if (err) return console.log('connection closed due to errors', err);

                res.end();
            });
    }
});

server.listen(8000, "127.0.0.1");