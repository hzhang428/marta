var getConnection = require('./db.js')

module.exports = {
    find: function(params, callback) {
        getConnection(function(err, con) {
            if (err) {
                callback(err, null);
                return;
            } else {
                var sql = 'SELECT * FROM User';
                con.query(sql, function(err, user) {
                    callback(null, user);
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