const projectData = {};

const express = require('express');
const app = express();

const bodyParser = require('body-parser')
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

const cors = require('cors');
  app.use(cors());
  app.use(express.static('website'));

const port = 3080;
const server = app.listen(port, listening);
function listening()
{
  console.log("running on localhost:" + port);
};

// GET route
app.get('/all', function(req, res)
{
  res.send(projectData);
});

// POST route
app.post('/add', function(req, res)
{
  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.userResponse;
});