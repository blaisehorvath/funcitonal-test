# Programming Test

Given the following input array of people, please complete task 1 - 3. You should use functional programming and JavaScript and preferably a TDD approach to complete the tasks. Feel free to use lodash, ramda or underscore.
Tests can be written using mocha, chai or jest.

Nice-To-Have's:
- Linting
- Standard Commit Message
- Fork this repo and make a PR to master, then add me as a reviewer
- Tests
- Maybe you have some other fancy ideas? 🙃

Please share your results via GitHub.

```
const people = [
  {
    name: 'Steven',
    children: [
      {
        name: 'Louis',
        children: [
          {
            name: 'Carl',
            children: [
              {
                name: 'Joseph'
              }
            ]
          }
        ]
      }
    ]
  }
];
```

### 1. Add `My name is: ` to all people entities.

Example: 

for Steven the result would be:

```
{
  name: 'My name is: Steven',
  children: [
    ...  
  ]
}
```

### 2. Add the name of the parent to each element as `parentName`. If there is no parent, simply don't add the attribute.

Example:

For Louis the result would be:

```
{
  name: 'Louis',
  parentName: 'Steven',
  children: [
    ...
  ]
}
```

### 3. Write tests for each function that you've written
