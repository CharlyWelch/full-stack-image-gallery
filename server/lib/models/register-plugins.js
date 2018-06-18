const mongoose = require('mongoose');

const updateOptions = {
    new: true,
    runValidators: true
};

const exists = schema => {
    schema.static('exists', function(query) {
        return this.find(query)
            .count()
            .then(count => count > 0);
    });
};

const updateById = schema => {
    schema.static('updateById', function(id, update) {
        return this.findByIdAndUpdate(id, update, updateOptions);
    });
};

const updateOne = schema => {
    schema.static('updateOne', function(query, update) {
        return this.findOneAndUpdate(query, update, updateOptions);
    });
};

mongoose.plugin(exists);
mongoose.plugin(updateById);
mongoose.plugin(updateOne);