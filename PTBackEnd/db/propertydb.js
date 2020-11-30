import pool from '../config.js';


let propertydb = {};

// Retreive all properties from database
propertydb.all = () => {
    return new Promise((resolve, reject) =>{
        pool.query(`SELECT * FROM propertymaster`, (err, results, fields) => {
        if (err) {
            return reject(err);
        }
        return resolve(results);
        });
    });
};


// Retreive single property from database
propertydb.one = (id) => {
  return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM propertymaster WHERE city = ?`, [id],
      (err, results, fields) => {
          if(err) {
              return reject(err);
          }
          return resolve(results);
      });
  });
}

export default propertydb;
