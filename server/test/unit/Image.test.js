const { assert } = require('chai');
const { Types } = require('mongoose');
const Image = require('../../lib/models/Image');
const { getErrors } = require('./helpers');

describe('Image Model Tests: ', () => {

    it('Is a valid model', () => {
        const data = {
            albumId: [Types.ObjectId()],
            title: 'test image',
            description: 'furry spider',
            url: 'http...'
        };
        const testImage = new Image(data);
        data._id = testImage._id;
        assert.deepEqual(testImage.toJSON(), data);
        assert.isUndefined(testImage.validateSync());
    });

    it('Requires fields', () => {
        const badImage = new Image({});
        const errors = getErrors(badImage.validateSync(), 3);
        assert.equal(errors.title.kind, 'required');
        assert.equal(errors.description.kind, 'required');
    });

});