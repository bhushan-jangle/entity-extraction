
# Wit.ai Integration 
Wit.ai is a natural language processing tool which allows developers to create applications that can interact with users through text or speech. It is completely open source and free to use, visit the [website](https://wit.ai/) to know more.

To see a working model visit this link https://ui.boxing25.hasura-app.io/

## Create Wit.ai application
- Visit the Wit.ai homepage.
- Login to use the dashboard.
- The dashboard should appear something like this.
 ![Screenshot (89).png](https://filestore.hasura.io/v1/file/8a484990-6a58-4321-8161-9ea0ef704da8)

- Click on the + icon to create a new app.
 ![Screenshot 546.jpg](https://filestore.hasura.io/v1/file/db26c68a-6fce-4f1a-b400-f7ce389d76a3)

- Enter the details and click Create App.
 ![Screenshot (88).png](https://filestore.hasura.io/v1/file/81ccf113-9fa4-4dc8-9bb8-d8d14a7d1081)

- Click on your app's name on the dashboard , you would see a page like this.
 ![Screenshot (91).png](https://filestore.hasura.io/v1/file/4d1ee4e1-dcbe-4eff-8ca4-00f9e213d515)

- You can train your app to find intents and key words. Read the  [Wit documentation](https://wit.ai/docs)  to know more about training your app.

## Trait to the wit.ai applicaton.
## Step-1
- Enter the details of your application.
 ![Screenshot (92).png](https://filestore.hasura.io/v1/file/f54f3cf6-73ee-4d9c-8b71-b930191c7a22)
## Step-2
- Train to the `wit.ai` application
 ![Screenshot (93).png](https://filestore.hasura.io/v1/file/cb0be684-a471-46ce-88cc-6a2b50ddcbf6)
## Step-3
- Go to the setting and now you will get the `server access token`.
- You have to use this token in your application.
 ![Screenshot (95).png](https://filestore.hasura.io/v1/file/2a700faa-4ebb-4d1c-b408-fab4c1cd4630)

# Development Environment set up
There would be two kinds of devs working in this project , the `nodejs` and the `react-js` developers. Jump to the respective sections to know how to setup the environment.

## For Nodejs development environment
you will first have to install `Nodejs` and the  [Node Package Manager [NPM)](https://docs.npmjs.com/) on your operating system.

## Windows and macOS
Installing `Node` and `NPM` on `Windows` and `macOS` is straightforward because you can just use the provided installer:
1. Download the required installer:
    1. Go to https://nodejs.org/en/
    2.Select the button to download the LTS build that is "Recommended for most users".
2. Install Node by double-clicking on the downloaded file and following the installation prompts.

## Ubuntu 16.04
- Running the following two commands on your terminal:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
## Testing your Nodejs and NPM installation
- Run the "version" command in your terminal/command prompt and check that a version string is returned:
```
>node -v
v8.9.4
```
- NPM can be tested in the same way:
```
>npm -v
5.6.0
```
- For more detail you can visit [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)

## Installing the packages and running the application.
```
# Navigate to project folder
$ cd /home/user/entity-extraction

# Navigate to api folder
$ cd microservices/api

# Install necessary packages
$ npm install

# To start the react application on your browser
$ npm init

# Run your app
$ export CLUSTER_NAME=[your-hasura-cluster-name]
$ gunicorn --reload --bind "0.0.0.0:8080" src:app
```
The app is running at http://localhost:8080. It runs on `port 8080` by default. In case it fails to run change to a different port and run again.
Edit the `server.js` file to create endpoints for your application.
- For more details you can visit [hasura documentation](https://docs.hasura.io/0.15/manual/getting-started/index.html).

## For React devs (app microservice)
First we need to install node.js.
Install `node.js` using this link - [Node](https://nodejs.org/en/download/)

`Node.js` comes with npm pre-installed. `npm` is short for node package manager and we'll be using it to manage our packages for the react project.
Follow the below instructions to setup your environment.
```
# Navigate to project folder
$ cd /home/user/entity-extraction

# Navigate to app microservice folder
$ cd microservices/ui/app

# Install necessary packages
$ npm install

# To start the react application on your browser
$ npm init
```
The `npm install` command will take some time to complete. At the end of it there will be `node_modules` folder which contains the necessary packages for development.
The `npm start` command opens the application on a browser window. You can start editing your code in `App.js` and see the changes immediately on the browser since the application reloads everytime you save your changes.

# Hasura cluster set up
In order to host our project on the cloud for everyone to see we'll use the `hasura` platform. Follow the instructions in this section to setup a cluster to which you can push your project folder.

## Install `hasura-cli`.
We'll need to install the hasura command line interface to use the hasura platform. To install use
```
$ curl -L https://hasura.io/install.sh | bash
```
To check if it successfully installed use
```
$ hasura version


hasura version: v0.2.28

```
## Login to hasura
Create an account or login to hasura using
```
$ hasura login
```
Your browser will open a link where you can register or login to hasura.

## Create a cluster
To create a cluster you can use the hasura free tier system.
```
$ hasura cluster create --type=free


INFO Creating a Hasura cluster...
INFO Hasura cluster created                        cluster=boxing25
INFO Initializing the cluster...
INFO Cluster initialized
INFO Kubernetes context has been added to this system  context=boxing25
```
Note your cluster name. In this case it is `boxing25`.

## Add cluster to your project
To add a cluster to this project use the following commands.
```
# Add cluster
$ hasura cluster add boxing25 -c hasura

# Set this cluster as the default
$ hasura cluster set-default hasura

# Add ssh-key
$ hasura ssh-key add -c hasura
```
## Pushing your code to the cluster
Follow the below steps.

```
# Go to your project folder
$ cd /home/user/entity-extraction

# Add all files for commit
$ git add .

# Commit files
$ git commit -m "First commit"

# Push to hasura cluster
$ git push hasura master
```
This will take some time to execute. After it is done use the following command to view your app.
```
# To view the api microservice
$ hasura microservice open api

# To view the app microservice
$ hasura microservice open ui
```

Your application is now viewable to anyone with the link to your microservice.
- For more info on managing clusters and hosting your project refer to the [hasura documentation](https://docs.hasura.io/0.15/manual/cluster/index.html).

# Working of the application
## Integration of app to the back-end client.
This app is integrated with `NodeJs` Client using the Client token.
The app is tested for new form of input.

when a request is made to the app, it return a `JSON response`.
A sample `JSON response`:
```
"_text":"what are the list of available free course",
"entities":
{
"message":
[
{
"confidence":0.96050954517973,
"value":"list of available free course",
"type":"value"
}
]
},
"msg_id":"0j9wx9aPHuFulwE7E"
}
```
## Web App-Reactjs

To make skeletal integration with `wit.ai` and develop a custom service that extract an entity from a user input and display it.

To see a working model visit this link https://ui.boxing25.hasura-app.io/
- You will see. 
 ![Screenshot (83).png](https://filestore.hasura.io/v1/file/82cea55f-6ac6-4b78-9c5c-a58fc83ead2c)

1. A form is created where the user can either select or enter any value to find entities in it.

2. When the user click extract, a request is sent to the server that extracts the entity. The extracted entity returned is displayed.

- You will get like this.
 ![Screenshot (86).png](https://filestore.hasura.io/v1/file/b108e46e-acc6-4a57-9aa4-684cf53d6a84)

# Creating your own wit.ai api

First follow this [section](https://hasura.io/hub/project/wlkrkng/wit.ai-entity-extraction/wit.ai-integration).
Then start to creating your own `wit.ai api`.

## Linking to your custom api.
Go to the settings of your wit application.
 ![Screenshot (95).png](https://filestore.hasura.io/v1/file/13114885-21b3-4523-83c0-1bdcf3277597)

Copy the `Server Access Token`.
 ![Screenshot (959).jpg](https://filestore.hasura.io/v1/file/b6c33282-d07b-4099-8711-ff27f5e2637b)

Use the server access token in your api`server.js` file.

```
//Upadating Module
const express = require('express');
const bodyParser = require('body-parser');
const {Wit} = require('node-wit');
const client = new Wit({accessToken: '4HPNRD6HZ5WJFMPTDSIXLUEAXASGQCHV'});

// Init App
const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//A route for api post method
app.post('/api', function (req, res) {
  let data = req.body.data;
  resp=client.message(data, {error: null})
  .then((data) => {
    entity=res.send(data);
  })
  .catch(console.error);
});

//Starts the webserver (router) on port 1000 and listens for connections
app.listen(1000,function(){
    console.log('server started on port 1000...')
});

```
## Testing your API

There are many API testing tools available , one of the popular ones is Postman .
Install Postman from here - [Postman](https://www.getpostman.com/).

Open the Postman application and setup an account.The home page should be like this.
 ![Screenshot (99).png](https://filestore.hasura.io/v1/file/943b5648-52d2-4370-bb0a-8009f981e9cc)

Enter your URL in input box and set the post method.
and click send button.
Add body of the request.
 ![Screenshot (100).png](https://filestore.hasura.io/v1/file/7b4cf1c8-3ca4-4802-bc41-29d6e6936864)
See the response.
 ![Screenshot (101).png](https://filestore.hasura.io/v1/file/c4bccb7c-b785-435e-bc4a-9be50d0839ae)

# Contributor

- Amal Chandran. React.js [Github Profile](https://github.com/adevofficial)
- Sredhar S. React.js [Github Profile](https://github.com/sreedharssuresh)
- Bhushan Jangle. Nodejs-Express [Github Profile](https://github.com/waffwaff1)

If there is any bug in the project, please feel free to comment below. If any error occurs while cloning and deploying, then contact me through mail at [bhushanajangle@gmail.com](https://mail.google.com/mail/u/0/#inbox)

