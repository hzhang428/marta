var getConnection = require('./db.js')
var mySQL = require('mysql')

module.exports = {
    find: function(params, callback) {
        getConnection(function(err, con) {
            if (err) {
                callback(err, null);
                return;
            } else {
                var sql = 'SELECT * FROM Station';
                con.query(sql, function(err, Stations) {
                    callback(null, Stations);
                    con.release();
                });
                return;
            }
        });
    },

    findById: function(params, callback) {
        getConnection(function(err, con) {
            if (err) {
                callback(err, null);
                return;
            } else {
                console.log(params)
                var columns = []
                var sql = 'SELECT ' + 
                          'A.StopID, A.Name, A.EnterFare, A.IsTrain, A.Status, B.Intersection ' +
                          'FROM ' + 
                          'Station AS A ' + 
                          'LEFT JOIN ' + 
                          'BusStationIntersection AS B ' + 
                          'ON ' + 
                          'A.StopID = B.StopID ' + 
                          'WHERE ' + 
                          'A.StopID = ?';
                con.query(sql, [params], function(err, Station) {
                    console.log(Station)
                    callback(null, Station);
                    con.release();
                });
                return;
            }
        });
    },

    create: function() {

    },

    update: function() {

    }
};