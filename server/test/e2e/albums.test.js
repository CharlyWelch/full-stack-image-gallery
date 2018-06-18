const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Albums API e2e: ', () => {
    before(() => dropCollection('albums'));

    const checkOk = res => {
        if(!res.ok) throw res.error;
        return res;
    };

    let testAlbum1 = {
        title: 'Fuzzy Wuzzies',
        description: 'things that make you go AWWWW',
        posterImage: 'http...'
    };

    let testAlbum2 = {
        title: 'Heeby Jeebies',
        description: 'things that make you go EWWWW',
        posterImage: 'http...'
    };



    it('Posts an album', () => {
        return request.post('/api/albums')
            .send(testAlbum1)
            .then(checkOk)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    ...testAlbum1,
                    _id,
                    __v
                });
                testAlbum1 = body;
            });
    });

    it('gets all albums', () => {
        return request.post('/api/albums')
            .send(testAlbum2)
            .then(checkOk)
            .then(({ body }) => {
                testAlbum2 = body;
                return request.get('/api/albums');
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [testAlbum1, testAlbum2]);
            });
    });
});
