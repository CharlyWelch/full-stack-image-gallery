const { assert } = require('chai');
const Album = require('../../lib/models/Album');
const { getErrors } = require('./helpers');

describe('Album Model Tests: ', () => {

    it('Is a valid model', () => {
        const data = {
            title: 'testAlbum',
            description: 'test description',
            posterImage: 'imageUrl'
        };

        const album = new Album(data);
        data._id = album._id;
        assert.deepEqual(album.toJSON(), data);
        assert.isUndefined(album.validateSync());
    });

    it('Requires fields', () => {
        const album = new Album({});
        const errors = getErrors(album.validateSync(), 3);
        assert.equal(errors.title.kind, 'required');
        assert.equal(errors.description.kind, 'required');
    });

});