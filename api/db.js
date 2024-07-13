import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "144.202.124.215",
    user: "root",
    password: "Wowangle123!",
    database: "BrianBlog"
})

// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "blog"
// })