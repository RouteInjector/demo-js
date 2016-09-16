module.exports = {
    id: "_id",
    path: "reviewer",
    plural: "reviewers",
    displayField: "niceName",
    extraDisplayFields: ["isReviewer"],
    shard: {
        shardKey: "name",
        shardValues: ["A", "B", "C"]
    },
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