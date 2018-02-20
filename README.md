# entity-extraction

# Entity Extraction using React Js and Wit.ai api

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

## Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

## Installation

a) First, you are required to run NPM inside this project which can be achieved by doing this NPM

    $ npm install

b) Now, you can simply start the application by running this command 

    $ node
 ## GOING INTO THE APP
To make skeletal inregration with wit.ai and develop a custom service that extract an entity from a user input and display it.

# Integration of app to the backend client.
This app is integrated with NodeJs Client using the Client token.

The app is tested for new form of input.

when a request is made to the app, it return a JSON response.

A sample JSON response:

```{
"_text":"what are the list of available free course",
"entities":{
"course_free":[
{
"confidence":0.96050954517973,"value":
"list of available free course","type":
"value"}
]
},
"msg_id":"0j9wx9aPHuFulwE7E"}
```
We need to return value of value of inside message (that is inside entities; course_free is the name of the entity) as response.

## Web App-Node JS SubGroup

A form is created where where the user can either enter an input or choose from the predefined statements available as a drop down.

When the user submits, a request is sent to the server that extracts the entity. The extracted entity returned is displayed.

The entity returned is displayed.

## GOING INTO THE APP

This is entity extraction app using wit.ai api.

https://api.boxing25.hasura-app.io/
