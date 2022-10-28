import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now(),
    },
    studentName: {
        type: String,
        required: true,
    },
    vaccineStatus:{
        type: Boolean,
    },
    vaccineName: {
        type: String,
        required: true,
    }
});

const student = mongoose.model('student', studentSchema);

export default student;