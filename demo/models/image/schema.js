var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , injector = require('../../../../src').MongooseInjector
    , jsonform = require('../../../../src').MongooseJsonform;

var func = function (form, modelValue) {
    console.log(modelValue);
};

var schema = new Schema({
        niceName: {type: String},
        image: {type: mongoose.Types.Image, title: "Gran imagen"},
        objImage: {
            image: {type: mongoose.Types.Image}
        },
        arrImage: [{type: mongoose.Types.Image}],
        arrObjImage: [{
            string: String,
            image: {type: mongoose.Types.Image}
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
