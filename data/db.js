const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlPass',
    database: 'blog_db'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('connesso a mysql');
});
module.exports = connection;
