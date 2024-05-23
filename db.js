import mysql from 'mysql2/promise'

const connection = mysql.createPool({
    host: "sql12.freesqldatabase.com",
    user: "sql12708538",
    password: "ACKE5CvBJp",
    database: "sql12708538"
})



export default connection;
