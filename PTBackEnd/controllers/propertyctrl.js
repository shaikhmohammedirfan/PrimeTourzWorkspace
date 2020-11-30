import propertydb from '../db/propertydb.js';

// Functions
export const getAllProperty =  async(req, res, next) => {
  try {
      // propertydb.all defined in propertydb.js
      let results = await propertydb.all();
      res.json(results);
  } catch(e) {
      console.log(e);
      // 500 is used as this error number is not present in standard error documents
      res.sendStatus(500);
  }
}


export const getPropertyById = async(req, res, next) => {
  try {
      let results = await propertydb.one(req.params.id);
      res.json(results);
  } catch(e) {
      console.log(e);
      res.sendStatus(500);
  }
}
