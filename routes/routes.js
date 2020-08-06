const express = require("express");
const route = express.Router();
const mainController = require('../controller/mainController');

route.get('/blog', mainController.getAllData);

route.post('/blog/create',mainController.postSingleData);

route.get('/blog/:_id',mainController.getSingleData);

route.get('/blog/delete/:_id',mainController.deleteSingleData);

route.patch('/blog/delete/:_id',mainController.deleteSingleData);

module.exports = route;