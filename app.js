
const { error } = require('console')
const geocode = require("./data.js/geocode")

const country = process.argv[2]



geocode.x(country, (error, data) => {
    console.log("ERROR : ", error)
    console.log("DATA : ",data)
})




