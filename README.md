
# Entity Extraction using React Js and Wit.ai api

## Requirements

For development, you will only need Node.js installed on your environement.

## Installing Node

In order to use Express you will first have to install Nodejs and the Node Package Manager (NPM) on your operating system. The following sections explain the easiest way to install the Long Term Supported (LTS) version of Nodejs on Ubuntu Linux 16.04, macOS, and Windows 10.

## Windows and macOS

Installing Node and NPM on Windows and macOS is straightforward because you can just use the provided installer:

Download the required installer:
Go to https://nodejs.org/en/
Select the button to download the LTS build that is "Recommended for most users".
Install Node by double-clicking on the downloaded file and following the installation prompts.

## Ubuntu 16.04

The easiest way to install the most recent LTS version of Node 6.x is to use the package manager to get it from the Ubuntu binary distributions repository. This can be done very simply by running the following two commands on your terminal:


    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y nodejs

Warning: Don't install directly from the normal Ubuntu repositories because they contain very old versions of node.

## Testing your Nodejs and NPM installation

The easiest way to test that node is installed is to run the "version" command in your terminal/command prompt and check that a version string is returned:

    >node -v
    v8.9.4


The Nodejs package manager NPM should also have been installed, and can be tested in the same way:


    >npm -v
    5.6.0


## Installation

a) First, you are required to run NPM inside this project which can be achieved by doing this NPM

    $ npm install

b) Now, you can simply start the application by running this command 

    $ node
    

# Wit Node.js SDK [![npm](https://img.shields.io/npm/v/node-wit.svg)](https://www.npmjs.com/package/node-wit)

`node-wit` is the Node.js SDK for [Wit.ai](https://wit.ai).

## Install

In your Node.js project, run:

```bash
npm install --save node-wit
```

## Quickstart

Run in your terminal:

```bash
# Node.js <= 6.x.x, add the flag --harmony_destructuring
node --harmony_destructuring examples/basic.js <MY_TOKEN>
# Node.js >= v6.x.x
node examples/basic.js <MY_TOKEN>
```

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
"message":[
{
"confidence":0.96050954517973,
"value":"list of available free course",
"type":"value"
}
]
},
"msg_id":"0j9wx9aPHuFulwE7E"}
```
We need to return value of value of inside message (that is inside entities;) as response.

## Web App-Node JS 

A form is created where where the user can either select or enter any value to find entitys in it.

When the user extract, a request is sent to the server that extracts the entity. The extracted entity returned is displayed.

The entity returned is displayed.


## GOING INTO THE API

This is entity extraction api using wit.ai api.

https://api.boxing25.hasura-app.io/api

## GOING INTO THE APP

This is entity extraction app using react js wit.ai api.

https://ui.boxing25.hasura-app.io/

## Support

In case of any bugs, issues or feature requests, feel free to raise an issue. We will try to work on it as soon as possible.

