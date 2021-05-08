const { readFileSync, writeFileSync } = require("fs")
const first = readFileSync("./content/first.txt", "utf8")
console.log("start")
const second = readFileSync("./content/second.txt", "utf8")
console.log(first, second)
writeFileSync(
  "./content/result-sync.txt",
  `here is the reuslt ${first},${second}`,
  { flag: "a" }
)
console.log("starting for the next task")
