var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , injector = require('../../../../src').MongooseInjector
    , jsonform = require('../../../../src').MongooseJsonform;

var func = function (form, modelValue) {
    console.log(modelValue);
};

var schema = new Schema({
        niceName: {type: String, required: true, feedback: false, title: "The nicename"},
        newField: {type: String, feedback: true},
        textarea: {type: String, format: 'textarea', rows: 5},
        image: injector.types.RImage,
        d1: {
            type: Schema.Types.Mixed,
            ref: "Advanced",
            denormalize: ['niceName', 'title'],
            propagate: true
        },
        d2: {
            type: Schema.Types.Mixed,
            ref: "Advanced",
            denormalize: ['niceName', 'title'],
            propagate: true
        },
        html: {type: String, format: 'html'},
        date: Date,
        singleStruct:{
            singleRef: {type: ObjectId, ref: "Advanced", shard: "niceName"},
            myShard: String
        },
        propagate: {type: ObjectId, ref: "Advanced",
            denormalize:['date', {source: "title", target:"titleDelAdvanced"}], plain:true},
        refsArray: [
            {type: ObjectId, ref: "Basic"}
        ],
        titleDelAdvanced: String,
        seconds: {type: Number, format: "time-seconds"},
        total: Number,
        arrayWithDependsOn: [
            {
                num: Number,
                hundreds: {type: String, dependsOn: {field: 'this.num', func: 'calculateHundreds', params: ['this.num']}}
            }
        ],
        dependsDiscount: {type: Number, dependsOn: {field: 'total', func: 'calculatediscount', params: ['niceName', 'total']}},
        url: {type: String, dependsOn: {field: 'niceName', func: 'dependsUrl', params: ['niceName']}},
        array: [String],
        testCSS: {
            type: String,
            title: "Santi molon",
            class: "h3",
            labelClass: "h1"
        },
        /*routes: [
            {
                route: Schema.Types.Mixed,
                settings: {
                    description: String,
                    webFilters: [{
                        type: Schema.Types.Mixed,
                        ref: "Advanced",
                        denormalize: ['niceName', 'title'],
                        propagate: true
                    }]
                }
            }
        ],*/
        objectNested: {
            model:{type: String, enum:['HomeOutstanding','Post'] }
        }




//tabs: {type: ObjectId, ref: 'Tab'},
//test:{
//    test: String
//},
//butonera: [{
//    wacala: String,
//    button: {type: String, format: 'button', action: 'function', func: 'wacalaCopier'}
//}],
//apiCall: {type: String, format: 'button', action:'api', method:'GET', url:'/tab/:niceName', title: 'Call api function'},
//funcCall: {type: String, format: 'button', action:'function', func: 'insideFunction'},
//recipe:{type: ObjectId, ref: 'Tab'}
    },
    {
        id: false
    }
);

require('./functions')(schema);

//Is used to enable refection in security middleware
schema.plugin(jsonform, {
    excludedPaths: ['_id', '__v'] //these paths are generally excluded
});

schema.plugin(injector, require('./injector'));

exports.getSchema = function () {
    return schema;
};
