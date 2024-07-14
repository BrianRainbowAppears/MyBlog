// import mysql from 'mysql'

// export const db = mysql.createConnection({
//     host: "144.202.124.215",
//     user: "root",
//     password: "Wowangle123!",
//     database: "BrianBlog"
// })

// // export const db = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "123456",
// //     database: "blog"
// // })

import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const dbConfig = {
    host: isProduction ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV,
    user: isProduction ? process.env.DB_USER_PROD : process.env.DB_USER_DEV,
    password: isProduction ? process.env.DB_PASSWORD_PROD : process.env.DB_PASSWORD_DEV,
    database: isProduction ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV,
};

export const db = mysql.createConnection(dbConfig);
