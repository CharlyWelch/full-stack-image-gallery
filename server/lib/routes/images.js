const router = require('express').Router();
const Image = require('../models/Image');
const { getParam, respond } = require('./route-helpers');

module.exports = router
    .param('id', getParam)

    .post('/', respond(
        ({ body }) => Image.create(body)
    ))

    .get('/', respond(
        ({ query }) => Image.findMyQuery(query)
    ));
