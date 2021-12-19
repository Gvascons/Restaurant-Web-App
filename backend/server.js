const express = require('express')
var bodyParser = require("body-parser");
const app = express()
const cors = require('cors')
const port = 8000

app.use(cors())
app.use(bodyParser.json());

users = [
  {
    name: "Arthur Oliveira",
    password: "arthuritoReiDelas",
    restaurants: [],
    id: 1
  }
]

// ##### DB #####

app.get('/', (req, res) => {
  return res.json(users)
})

// ##### LOGIN #####

app.post('/login', (req, res) => {
  let userCheck = users.find(user => user.name == req.body.name);
  if (userCheck) {
    if (userCheck.password == req.body.password){
      res.status(200).send( {
        message: "Successful Login!"
      })
    }
    else {
      res.status(200).send( {
        message: "Incorrect Password!"
      })
    }
  } else {
    res.status(200).send( {
      message: "Invalid Login!"
    })
  }
})

// ##### USERCRUD #####

app.post('/usercrud', (req, res) => {
  let newUser = users.find(user => user.name == req.body.name);
  if (newUser) {
    res.status(200).send( {
      message: "This User Already Exists!"
    })
  }
  else {
    req.body['id'] = users.length + 1
    users.push(req.body)
    res.status(200).send( {
      message: "Registration Successfull!"
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})