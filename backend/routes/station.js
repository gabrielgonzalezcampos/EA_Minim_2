'use strict'
//Llista de rutes per als stations

const express = require('express')
const apiStations = express.Router()
const stationCtrl = require('../controllers/station')

//http://localhost:3001/api/station

apiStations.get('/', stationCtrl.getStations)
apiStations.get('/:stationId', stationCtrl.getStation)
apiStations.post('/', stationCtrl.saveStation)
apiStations.put('/:stationId', stationCtrl.updateStation)
apiStations.delete('/:stationId', stationCtrl.deleteStation)

apiStations.delete('/bike/:stationId/:bikeId', stationCtrl.removeBike)
apiStations.get('/addBike/:stationId/:bikeId', stationCtrl.addBike)

apiStations.get('/bikes/:stationId', stationCtrl.getStationBikes)

//apiStations.get('/bikes/:stationId/:bikeId', stationCtrl.deleteStationBikes)

module.exports =  apiStations