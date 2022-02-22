# What is meant by stacks?

When someone asks, what is your tech stack, they are referring to the list of different technologies used accross your web app.

**MEAN** stack is MongoDB Express Angular Nginx

**MERN** stack is MongoDB Express React Nginx

**PERN** stack is Postgresql Express React Nginx


## What is an API?

APIs make data accessible to other applications and services. They allow other websites to access some data, and you can also make changes to the data via apis.

An API is a series of endpoints. There are urls where the data is exposed.

They are an interface between the backend where data is contained, and front-end (UI) of your website.

#Types of HTTP request

GET requests
They request to return some data from the server.

POST
You are adding a new resource. So you normally send data TO the api in your request.

PUT
This is used when you update a resource on the API.

DELETE
deletes a resource.


# REST apis
These are what we will be using mainly. They are **normally in json format**, but not always.


# What is JSON?
JSON is a text-based data format following JavaScript object syntax

The syntax is very similar to javascript objects.
{
  "animals": [
     { "name": "tiger" },
     { "name": "lion" },
     { "name": "hippo" }
  ]
}
To access a json array item (eg. first animal):  `animals[tiger]`
To access a json object key (eg. name):  `myobject.name`

[Read more here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)


# Homework

1. Make an http GET request to the reqres.in api. If you get a 200 status then alert or console.log "API worked" or something similar.

2. Make a GET request to the earthquakes API (see link in slack). First console log the data object and explore the data using chrome developer tools. See example in this folder, earthquakes/main.js

<!-- If you are feeling confident have a go at the following -->
Loop through the features object ( data.features) using a method like
```
myArray.map((item,i) => {
  console.log(item);
  return item;
})
```
Then console.log the title of the earthquakes.

Stretch. log or print in html the locations  

#Useful resources
https://github.com/jdorfman/awesome-json-datasets
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
