module.exports = {
    id: "_id",
    path: "company",
    plural: "companies",
    displayField: "niceName",
    extraDisplayFields: ["owner", "employees"],
    get: {},
    post: {},
    put: {},
    delete: {},
    search: {},
    export: {},
    import: {},
    validate: {},
    form: {
        items: ['*']
    }
};