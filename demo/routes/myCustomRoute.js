//var checkRole = injector.security.checkRole;
//var getUserIfExists = injector.security.getUserIfExists;
//
//module.exports.route = function (router) {
//    router.get('/myCustomRoute/:myParam', checkRole('admin').middleware, function JuanitoFuncador(req, res) {
//        res.json({result: "OK", param: req.params.myParam});
//    });
//
//    router.get('/populate', function (req, res) {
//
//    });
//
//    router.get('/profiler', function (req, res) {
//        var mongoose = require('mongoose');
//        mongoose.connection.db.collection("system.profile", function (err, collection) {
//            collection.find({}).toArray(function (err, results) {
//                res.json(results);
//                return res.end();
//            })
//        });
//    });
//};
//

module.exports.route = function (app, injector) {
    app.get('/centollo', function (req, res) {
        res.json({
            hola: "que tal"
        });
        return res.end();
    });
}