var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , jsonform = require('../../../../src/').MongooseJsonform
    , injector = require('../../../../src/').MongooseInjector;

var schema = new Schema({
        niceName: String,
        owner: {type: ObjectId, ref: 'Entrepreneur'},
        employees: Number
    },
    {
        id: false
    }
);

//schema.methods.addRequest = function (req) {
//    console.log(req);
//    this.__req = req;
//};

//require('./functions')(schema);

//Is used to enable refection in security middleware
schema.plugin(jsonform, {
    excludedPaths: ['_id', '__v'] //these paths are generally excluded
});

schema.plugin(injector, require('./injector'));

exports.getSchema = function () {
    return schema;
};
