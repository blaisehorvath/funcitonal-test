const people = require("./data")
const { task, task2 } = require("./lib")

const result1 = task(people)
console.log(JSON.stringify(result1, null, 2))

const result2 = task2(people)
console.log(JSON.stringify(result2, null, 2))

