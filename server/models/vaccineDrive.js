import mongoose from "mongoose";

const driveSchema = mongoose.Schema({
    driveDate: {
        type: Date,
        required: true,
    },
    numberOfVaccines: {
        type: Number,
        required: true,
    }
});

const drive = mongoose.model('drive', driveSchema);

export default drive;