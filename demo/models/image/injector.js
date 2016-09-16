module.exports = {
    id: "_id",
    path: "imagemodel",
    plural: "imagemodels",
    displayField: "niceName",
    get: {},
    post: {},
    put: {},
    delete: {},
    search: {},
    export: {},
    import: {},
    form: {
        tabs: [{
            title: "Image",
            items: ['image']
        }, {
            title: "Image in Object",
            items: ['objImage']
        }, {
            title: "Array of Images",
            items: ['arrImage']
        }, {
            title: 'Array of Objects with a field being an image',
            items: ['arrObjImage']
        }]
    }
};