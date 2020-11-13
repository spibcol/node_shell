const fs = require("fs");

process.stdout.write("prompt > ");

const fileSystem = fs.readdir("./", "utf8", (err, files) => {
  let fileArray = files.toString().trim();
  return fileArray;
});
const ls = process.stdin.on("data", (data) => {
  const cmd = data.toString().join(" ");
  process.stdout.write(cmd);
});
module.export = ls;
