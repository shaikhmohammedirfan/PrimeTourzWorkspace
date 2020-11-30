import express from 'express';
import { getAllHotels, getHoltelById, addHotel, editHotelById, delHotelById } from '../controllers/hotelctrl.js';

const hotelrouter = express.Router();

// Routes
hotelrouter.get('/', getAllHotels);

hotelrouter.get('/:id', getHoltelById);

hotelrouter.post('/', addHotel);

hotelrouter.put('/:id', editHotelById);

hotelrouter.delete('/:id', delHotelById);


export default hotelrouter;