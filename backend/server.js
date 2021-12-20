const express = require('express')
var bodyParser = require("body-parser");
const app = express()
const cors = require('cors')
const port = 8000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(cors())
app.use(bodyParser.json());
app.use(express.json())

/*
const users = [
  {
    'name': "Arthur Oliveira",
    'password': "arthuritoReiDelas",
    'restaurants': [],
    'id': 1
  }
]
*/
// ##### DB #####

const admin = [
  {
    "name": "João",
    "password": "123",
    "restaurants": [
      {
        "name": "Ariana Comes e Bebês",
        "tel": "03123",
        "email": "ariana@grande.org",
        "bairro": "Seven Rings",
        "num": "666",
        "city": "Rua",
        "rua": "Cidade",
        "price": "$$$",
        "desc": "I wanna! I got it!",
        "idRest": 0
      },
      {
        "name": "Bolagude Foods",
        "tel": "0123",
        "email": "lucascalabria@ymail.com",
        "bairro": "Boa Viagem",
        "num": "666",
        "city": "Rua",
        "rua": "Rua aaaaaaa",
        "price": "$$$",
        "desc": "aaaaaa",
        "idRest": 1
      }
    ],
    "id": 0
  }
] 

app.get('/', (req, res) => {
  return res.json(admin)
})

app.get('/login', (req, res) => {
  return res.json(admin)
})

app.get('/usercrud', (req, res) => {
  return res.json(admin)
})

// ##### LOGIN #####

app.post('/login', (req, res, next) => {
  let userCheck = admin.find(user => user.name == req.body.name);
  if (userCheck) {
    if (userCheck.password == req.body.password){
      res.status(200).send( {
        message: ["Successful Login!", userCheck.id]
      });
      next();
    }
    else {
      res.status(400).send( {
        message: "Incorrect Password!"
      })
    }
  } else {
    res.status(400).send( {
      message: "Invalid Login!"
    })
  }
})

// ##### USERCRUD #####

app.post('/usercrud', (req, res) => {
  let newUser = admin.find(user => user.name == req.body.name);
  if (newUser) {
    res.status(200).send( {
      message: "This User Already Exists!"
    })
  }
  else {
    req.body['id'] = admin.length
    admin.push(req.body)
    res.status(200).send( {
      message: "Registration Successfull!"
    })
  }
})

// #########################################################


app.post('/admin/addRestaurant/:index', (req, res) =>{
  const {index}  = req.params
  let restaurant = req.body

  const allRestaurants = admin[index]["restaurants"]
  const tam = allRestaurants.length-1

  if (tam==(-1)) restaurant.idRest=0
  else restaurant.idRest = allRestaurants[tam]["idRest"]+1
  

  admin[index]["restaurants"].push(restaurant)
  return res.json(true)
}) 

app.post('/admin/editRestaurant/:index', (req, res) =>{
  const {index}  = req.params
  let restaurant = req.body

  if (index<admin[index]["restaurants"].length){
      admin[index]["restaurants"][restaurant.idRest] = restaurant
      return res.json(true)
  }
  else return res.json(false)
})

app.post('/admin/deleteRestaurant/:index', (req, res) => {
  const { index } = req.params
  const idRest = req.body.selected
  const allRestaurants = admin[index]["restaurants"]

  console.log(req.body.selected)

  allRestaurants.splice(idRest, 1)

  for(let i=idRest; i<allRestaurants.length; i++){
      allRestaurants[i]["idRest"] -= 1
  }

  return res.json()
})

app.get('/admin/:index', (req, res) => {
  temp = {...admin[req.params.index]}
  temp["password"] = '**'
  return res.json(temp)
})