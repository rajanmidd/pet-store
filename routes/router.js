'use strict';
const express= require('express');
const router = express.Router();
const PetStore = require('../controller/petStore');
const petStore = new PetStore();


// For logging purpose
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'result.log' })
    ]
});

//API for fetching all owner from the json file
router.get('/owners', async (req, res) => {
    const result= await petStore.getOwners();
    logger.info(result);
    res.json(result);
});

//API for fetching owner deyails with theit pets
router.get('/owners/:id', async (req, res) => {
    const result= await  petStore.getOwnerDetails(req.params.id);
    logger.info(result);
    res.json(result);
});

//API for adding pet for a perticular owner
router.post('/addPet', async (req, res) => {
    const result= await petStore.addPet(req.body);
    logger.info(result);
    res.json(result);
});

//API for fetch pet details
router.get('/pets/:id', async (req, res) => {
    const result= await petStore.editPet(req.params.id);
    logger.info(result);
    res.json(result);
});

module.exports = router;