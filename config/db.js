var mysql = require('mysql2');
var db_info = {
    host: 'defalut.cmj5m2fzc8ae.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'injoo123',
    database: 'mydb'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}