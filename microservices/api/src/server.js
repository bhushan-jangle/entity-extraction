const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {Wit} = require('node-wit');
const client = new Wit({accessToken: '4HPNRD6HZ5WJFMPTDSIXLUEAXASGQCHV'});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api', function (req, res) {
  let data = req.body.data;
  resp=client.message(data, {error: null})
  .then((data) => {
    entity=res.send(data);
  })
  .catch(console.error);
});

app.listen(1000,function(){
    console.log('server started on port 1000...')
});
