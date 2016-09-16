var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , jsonform = require('../../../../src/').MongooseJsonform
    , injector = require('../../../../src/').MongooseInjector;

var schema = new Schema({
        niceName: String,
        birth: Date,
    },
    {
        id: false
    }
);

schema.plugin(jsonform, {
    excludedPaths: ['_id', '__v'] //these paths are generally excluded
});

schema.plugin(injector, require('./injector'));

exports.getSchema = function () {
    return schema;
};
