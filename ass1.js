const fs = require("fs");

const fileName = "grafana.txt";

const now = new Date();

const date = now.toLocaleDateString("en-GB");
const time = now.toLocaleTimeString("en-US", {
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});

const url = "http://localhost:5000";

const log = `${date}:${time}-${url}\n`;

fs.appendFile(fileName, log, (err) => {
  if (err) {
    console.log("no logs found", err);
  } else {
    console.log("successfully!");
    console.log(log);
  }
});