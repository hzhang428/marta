var mySQL = require('mysql');
var pool = mySQL.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Wdz.0011',
    database: 'Marta'
});
var getConnection = function(callback) {
    pool.getConnection(function(err, con) {
        if (err) {
            return callback(err, null);
        }
        callback(null, con);
    });
};

module.exports = getConnection;
