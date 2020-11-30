import express from 'express';
import { getAllProperty, getPropertyById } from '../controllers/propertyctrl.js';

const propertyrouter = express.Router();

// Routes
propertyrouter.get('/', getAllProperty);
propertyrouter.get('/:id', getPropertyById);


export default propertyrouter;
