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
