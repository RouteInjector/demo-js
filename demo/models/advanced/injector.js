module.exports = {
    id: "_id",
    path: "advanced",
    plural: "advanceds",
    displayField: "niceName",
    extraDisplayFields:["title"],
    get: {
    },
    post: {},
    put: {},
    delete: {},
    search: {
    },
    export: {},
    import: {},
    validate: {},
    form:{
        tabs:[{
            title: "Static",
            items:['niceName', 'title', 'apiCall', 'dynamic', 'date', 'noclass','feedback']
        },{
            title: 'Dynamic',
            items:['tags', 'testmultiselect']
        }]
    }
};