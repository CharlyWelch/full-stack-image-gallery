const router = require('express').Router();
const { respond, getParam } = require('./route-helpers');
const Album = require('../models/Album');

module.exports = router

    .param('id', getParam)

    .post('/', respond(
        ({ body }) =>  Album.create(body)
    ))

    .get('/', respond(
        ({ query }) =>  Album.findByQuery(query)
    ));