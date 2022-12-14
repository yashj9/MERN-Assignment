import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import driveRoutes from './routes/vaccineDrive.js';
import landingDetailsRoutes from './routes/landingDetails.js';
import useVaccineRoutes from './routes/useVaccine.js';
import getFilteredReport from './routes/filterReport.js';

const app = express();

app.use(cors());

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use('/students', studentRoutes);
app.use('/drives', driveRoutes);
app.use('/landingDetails', landingDetailsRoutes);
app.use('/useVaccine', useVaccineRoutes);
app.use('/getFilteredReport', getFilteredReport);

const MDB_CONNECTION_URL = "mongodb+srv://yashj9:yashjpw@cluster0.dnsgovv.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(MDB_CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true   // to avoid some warnings and errors
}).then(() => app.listen(PORT, () =>
    console.log('Connection is established and running on port: ' + PORT)
)).catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);    // to avoid some warnings and errors (this is depricated and no longer required)