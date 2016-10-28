var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , injector = require('route-injector').MongooseInjector
    , jsonform = require('route-injector').MongooseJsonform;

var func = function (form, modelValue) {
    console.log(modelValue);
};

var schema = new Schema({
        niceName: [{
            haha: String,
            denorm: {type: mongoose.Schema.Types.Mixed, ref: 'User', denormalize: ['niceName', 'name']}
        }]
    },
    {
        id: false
    }
);


//Is used to enable refection in security middleware
schema.plugin(jsonform, {
    excludedPaths: ['_id', '__v'] //these paths are generally excluded
});

schema.plugin(injector, require('./injector'));

exports.getSchema = function () {
    return schema;
};
