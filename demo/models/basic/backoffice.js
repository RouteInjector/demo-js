module.exports = {
    calculatediscount: function (params, send) {
        console.log(params);
        if (params.total > 200) {
            send(10);
        }
        else {
            send(0);
        }
    },
    calculateHundreds: function(params, send){
        console.log("TOTAL", params);
        send(Math.floor(params[Object.keys(params)[0]]/100));
    },
    dependsUrl: function(params, send){
        console.log("TOTAL", params);
        send('<a href="http://www.google.es?niceName='+params.niceName+'" target="_blank">Recipe</a>');
    }
};