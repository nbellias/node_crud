//create new express router
const express = require('express'),
router = express.Router(),
mainController = require('./controllers/main.controller'),
eventsController = require('./controllers/events.controller');

//export router
module.exports = router;

//define routes
//main routes
router.get('/', mainController.showHome);

//event routes
router.get('/events', eventsController.showEvents);
router.get('/events/:slug', eventsController.showSingle);

//create events

//edit events

//delete events