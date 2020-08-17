const people = require("./data")
const { task } = require("./lib")

const result = task(people)

console.log(JSON.stringify(result, null, 2))


