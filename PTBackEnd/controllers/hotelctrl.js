import hoteldb from '../db/hoteldb.js';


// Functions
export const getAllHotels =  async(req, res, next) => {
    try {
        // hoteldb.all defined in hoteldb.js
        let results = await hoteldb.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        // 500 is used as this error number is not present in standard error documents
        res.sendStatus(500);
    }
}

export const getHoltelById = async(req, res, next) => {
    try {
        let results = await hoteldb.one(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export const addHotel = async (req, res, next) => {
    try {
        let results = await hoteldb.add(req.body);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export const editHotelById = async (req, res, next) => {

    try {
        let results = await hoteldb.put(req.params.id, req.body);
        res.json(results);
    } catch (e) {
       console.log(e);
       res.sendStatus(500);
    }
}


export const delHotelById = async (req, res) => {

    try {
        let results = await hoteldb.del(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}
