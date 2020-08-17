const { renameItem, pickFistItem, buildPeople, serializePeople } = require('./lib');

describe(
  "renameItem", () => {
    test('can rename a string item', () => {
      expect(renameItem("John")).toBe("My name is: John");
    })
  }
)

describe("pickFirstItem", () => {
  test('can pick the first item of a non-empty array', () => {
    expect(pickFistItem(["a"])).toBe("a")
  })
})

describe("buildPeople", () => {
  test('creates a recursive people object from a leaf and a people leaf object', () => {
    const expected = {
      name: "root",
      children: [
        { name: "leaf" }
      ]
    }
    const received = buildPeople("root", { name: "leaf" })
    expect(received).toMatchObject(expected)
  })
})

describe("serializePeople", () => {
  test('serializes a recursive people object', () => {
    const input = {
      name: "root",
      children: [
        { name: "leaf" }
      ]
    }
    const received = serializePeople(input)
    const expected = ["root", "leaf"]
    expect(received).toMatchObject(expected)
  })
})
