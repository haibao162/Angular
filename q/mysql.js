var mysql = require('mysql');
var config = require('./config.json');
var pool = mysql.createPool({
	host : config.host,
	user : config.user,
	password : config.password,
	database : config.database
});

function getConnection(callback){
	return pool.getConnection(callback);
}

module.exports = {
	getConnection : getConnection
};