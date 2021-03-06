// 连接 MySQL：先安装 npm i mysql -D
const mysql = require('mysql');


let pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'x1',
	multipleStatements : true  //是否允许同时执行多条sql语句
});


function query(sql, values, callback) {
	return new Promise((resolve, reject) => {
		pool.getConnection((error, connection) => {
			if(error) {
            	reject(error);
            	return;
			}
			connection.query(sql, values, (error, rows, fields) => {
				connection.release();
				if(error) {
                	reject(error);
                	return;
				}
				resolve(JSON.parse(JSON.stringify(rows)));
			});
		});
	});
}


exports.query = query;
