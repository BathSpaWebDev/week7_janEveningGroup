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


# REST apis are what we will be using mainly. They are normally in json format.


# What is JSON?

{
  "animals": [
     { "name": "tiger" },
     { "name": "lion" },
     { "name": "hippo" }
  ]
}


# Homework

1. Make an http GET request to the reqres.in api. If you get a 200 status then alert "API worked" or something similar.

2. Make a GET request to the earthquakes API (see slack). and console.log
the names/locations of the earthquakes. 
