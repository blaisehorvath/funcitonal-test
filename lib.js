const { pipe, map, reduceRight } = require("ramda")

function pickFistItem( array = [] ) {
  const [first] = array
  return first
}

function serializePeople( obj, accumulator = [] ) {
  return !("children" in obj)
    ? [...accumulator, obj.name]
    : serializePeople(pickFistItem(obj.children), [...accumulator, obj.name])
}

function buildPeople( currVal, acc = null ) {
  return acc ? {
    name: currVal,
    children: [ acc ]
  } : { name: currVal }
}

function renameItem( item ) {
  return `My name is: ${item}`
}

const task = pipe(
  pickFistItem,
  serializePeople,
  map(renameItem),
  reduceRight(buildPeople, null),
  Array,
)

module.exports = {
  renameItem,
  pickFistItem,
  serializePeople,
  buildPeople,
  task,
}