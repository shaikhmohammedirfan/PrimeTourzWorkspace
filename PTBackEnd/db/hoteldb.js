import pool from '../config.js';


let hoteldb = {};

// Retreive all hotels from database
hoteldb.all = () => {
    return new Promise((resolve, reject) =>{
        pool.query(`SELECT * FROM hotelmaster`, (err, results, fields) => {
        if (err) {
            return reject(err);
        }
        return resolve(results);
        });
    });
};


// Retreive single hotel from database
hoteldb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM hotelmaster WHERE city = ?`, [id],
        (err, results, fields) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}


// Insert single hotel into database
hoteldb.add = (body, res, next) => {
    // console.log(body);
    pool.query('INSERT INTO hotelmaster(hotelcode,hotelname,location,city,features,category) VALUES (?, ?, ?, ?, ?, ?)',
    [body.hotelcode,body.hotelname,body.location,body.city,body.features,body.category]);
    
}


// Update single record by id
hoteldb.put = (id, body) => {
    pool.query(`UPDATE hotelmaster SET hotelname = ?, location = ?, city = ?, features = ?, category = ?  WHERE hotelcode= ?` ,
    [body.hotelname, body.location, body.city, body.features, body.category, id]);
};


// Delete record by id
hoteldb.del = (id) => {
    pool.query(`DELETE FROM hotelmaster WHERE hotelcode = ?`, [id]);
}


export default hoteldb;
