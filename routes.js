const express = require('express');
const routes = require('./config/routes.js');


let router = express.Router();
let requiredEntities = {};

/* Defines on Express all the routes in the routes.js file */
for (const route of routes) {
    if (!requiredEntities[route.entity]) {
        requiredEntities[route.entity] = require(`./entity/${route.entity}/controller.js`);
        
    }
    
    router[route.type](route.path,requiredEntities[route.entity][route.method]);
}

module.exports = router;