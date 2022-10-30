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

    console.log(student);

    const newStudent = new StudentData(student);

    console.log(newStudent);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const editStudent = async (req, res) => {
    // res.send('Router is working');
    const student = req.body;

    console.log(student);

    try {
        const foundStudent = await StudentData.findOne({ _id: student.id});

        console.log(foundStudent);
        var myquery = { _id: student.id };
        var newvalues = { $set: { date: student.date, studentName: student.studentName, vaccineStatus: student.vaccineStatus, vaccineName: student.vaccineName} };
            const updatedDrive = await StudentData.updateOne(myquery, newvalues);
            res.status(201).json(updatedDrive);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const vaccinateStudent = async (req, res) => {
    // res.send('Router is working');
    const student = req.body;

    console.log(student);

    try {
        const foundStudent = await StudentData.findOne({ _id: student.id});

        console.log(foundStudent);
        var myquery = { _id: student.id };
        var newvalues = { $set: { date: Date.now(), studentName: foundStudent.studentName, vaccineStatus: true, vaccineName: foundStudent.vaccineName} };
            const updatedStudent = await StudentData.updateOne(myquery, newvalues);
            res.status(201).json(updatedStudent);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteStudent = async (req, res) => {
    // res.send('Router is working');
    try {
        console.log(req.query.id);
        const deleteStudentResp = await StudentData.findByIdAndDelete(req.query.id);

        res.status(200).json(deleteStudentResp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const uploadStudent = async (req, res) => {
    // res.send('Router is working');
    const student = req.body;

    console.log(student);

    const newStudent = new StudentData(student);

    console.log(newStudent);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}