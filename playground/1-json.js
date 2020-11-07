const fs = require('fs')
const person = {
    name : "Vivi",
    age : 21
}

const dataJson = JSON.stringify(person)
fs.writeFileSync('1-json.json',dataJson)

const dataBuffer = fs.readFileSync('1-json.json')
const dataString  = dataBuffer.toString()
const dataObj  = JSON.parse(dataString)
dataObj.name = "Vivek"
dataObj.age = 22
fs.writeFileSync('1-json.json',JSON.stringify(dataObj))  