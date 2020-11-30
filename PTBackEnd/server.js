import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import hotelsRoute from './routes/hotelsRoute.js';
import propertyRoute from './routes/propertyRoute.js';


// initialize application
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());

// apis
app.use('/api/hotels', hotelsRoute);
app.use('/api/property', propertyRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})
