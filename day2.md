# Making Post requests with fetchData

# JS objects

Objects are denoted with curly braces. You can store them in a variable like this:
```
let myObject = {
  key1: value,
  key2: value,
}
```
They are made up of a series of key value pairs.

To access a value of a key value pair, you use the syntax as follows:

`myObject.key`  This will return the value of that key/value pair
or
`myObject['key']`  The same for this one

#Challenge
Create an object with some key value pairs. For example, a Person object.

Then, print in your html tone value from the object.


# Arrays

An array is denoted by square brackets. It is a bit like a list . Each item has a index (starting at 0) and value. They look like this:
```
const fruitsArray =[
  'orange',  
  'banana',
  'apple'
]
```
Each one has an index. So to access an item from an array, you can use the index to select the item, like so:
`fruitsArray[2]` this would return 'apple'.

# Looping through an Arrays
To loop through an array you are going through each item and doing something.
Some common looping array methods are .forEach, .map. You can also use a 'for' loop.

If we have an array within an object, we can access like this:

```
myObject.exampleArray[0]
```


#ASIDE on getting elements from html
Her are some different ways of accessing the html document:
```
document.getElementById('demo');
document.getElementsByClassName('demo'); // returns html collection
document.getElementsByClassName('demo')[0]; //Only returns the first element with specified class
document.querySelector('.myClass');
document.querySelectorAll('.myClass'); // node list
```

#Homework
Practice creating js objects and arrays, and then access them using the methods described above.
