var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
var fetch = require('node-fetch')
var dateFormat = require('dateformat');

const dotenv = require('dotenv');
dotenv.config();

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))


//console.log(JSON.stringify(mockAPIResponse))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})


const getWeather = async (req,r)=>{

  let city = req.body.city
  let state = req.body.state
  let startDate = req.body.startDate
  let endDate = req.body.endDate

  const baseURL ="https://api.weatherbit.io/v2.0/forecast/daily?";

  const res = await  fetch(`${baseURL}city=${city},${state}&key=${process.env.API_KEY_W}`);
  try {

    const data = await res.json();
    //console.log(data)

    r.send(data);
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const getImg = async (req,r)=>{

  let city = req.body.city
  let state = req.body.state

  const baseURL ="https://pixabay.com/api/?";

  const res = await  fetch(`${baseURL}key=${process.env.API_KEY_P}&q=${city}+${state}&image_type=photo&pretty=true`);
  try {

    const data = await res.json();

    r.send(data);
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const getCoord = async (req,r)=>{

  let city = req.body.city
  
  const baseURL ="http://api.geonames.org/searchJSON?";

  const res = await  fetch(`${baseURL}q=${city}&maxRows=1&username=${process.env.USER_NAME_G}`);
  try {

    const data = await res.json();

    r.send(data);
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

app.post('/weather', function(req,res){
  getWeather(req,res);
})

app.post('/img', function(req,res){
  getImg(req,res);
})

app.post('/coordinates', function(req,res){
  getCoord(req,res);
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
