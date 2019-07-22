# Programming Test

Given the following input array of people, please complete task 1 - 3. You should use functional programming and JavaScript and preferably a TDD approach to complete the tasks. Feel free to use lodash, ramda or underscore.
Tests can be written using the mocha and chai. 

An individual link will be sent you to a CoderPen.io session. Once you've completed the tasks simply close the window and let me know that you're done.


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

### 1. Add "My name is: " to all people entities.

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

### 3. Write tests for the each function that you've written
