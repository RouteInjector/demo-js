var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , injector = require('../../../../src').MongooseInjector
    , jsonform = require('../../../../src').MongooseJsonform;

var func = function (form, modelValue) {
    console.log(modelValue);
};

var userInfo = {
    type: Schema.Types.Mixed,
    ref: 'Basic',
    denormalize: ['niceName', 'newField']
};

var userInfoBrief = {
    type: Schema.Types.Mixed,
    ref: 'Basic',
    denormalize: ['niceName']
};

var schema = new Schema({
        niceName: {type: String, required: true, feedback: false},
        title: String,
        apiCall: {type: String, format: 'button', action:'api', method:'POST', url:'/aa', title: 'Call api function'},
        //funcCall: {type: String, format: 'button', action:'function', func: 'ola'},
        dynamic: {type: String, dynEnum: 'http://localhost:40000/schemas'},
        date: Date,
        noclass: {
            info: [{
                code: {type: String, placeholder: "Not working yet!", class: "col-md-4"},
                sizes: {
                    w: {type: String, class: "col-md-4"},
                    h: {type: String, class: "col-md-4"}
                }
            }]
        },
        tags: [{type: String, enum:['a/a', 'a/b', 'b/c'], separator: '/'}],
        feedback: {
            participants: userInfo,
            comments: [{
                isEnabled: {type: Boolean, default: true},
                date: {type:Date, default: new Date()},
                text: {type:String, format: 'textarea'},
                from: userInfoBrief,
                to: [userInfoBrief]
            }]
        },
        testmultiselect:[{
          type:String, map: {"a": "Valor A", "b": "Valor B"}
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
