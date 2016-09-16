var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , injector = require('../../../../src').MongooseInjector
    , jsonform = require('../../../../src').MongooseJsonform;

var func = function (form, modelValue) {
    console.log(modelValue);
};

var schema = new Schema({
        arraySimple: [String],
        comments: [{
            a: String
            //comments: [{
            //    a: String
            //}]
        }]
    },
    {
        id: false
    }
);


schema.plugin(jsonform, {
    excludedPaths: ['_id', '__v']
});

schema.plugin(injector, require('./injector'));

exports.getSchema = function () {
    return schema;
};
