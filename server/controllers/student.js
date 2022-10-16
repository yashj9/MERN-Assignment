import StudentData from "../models/student.js";

export const getStudents = async (req, res) => {
    // res.send('Router is working');
    try {
        const allStudents = await StudentData.find();

        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    // res.send('Router is working');
    const student = req.body;

    const newStudent = new StudentData(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

