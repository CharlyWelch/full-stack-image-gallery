const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Albums API e2e: ', () => {
    before(() => dropCollection('albums'));

    let testAlbum = {
        title: 'Fuzzy Wuzzies',
        description: 'things that make you go AWWWW',
        posterImage: 'http...'
    };

    it('Posts an album', () => {
        return request.post('/api/albums')
            .send(testAlbum)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    ...testAlbum,
                    _id,
                    __v
                });
                testAlbum = body;
            });
    });

});