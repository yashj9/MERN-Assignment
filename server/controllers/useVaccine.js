import VaccineDriveData from "../models/vaccineDrive.js";
import StudentData from "../models/student.js";
import date from 'date-and-time';
import e from "express";

export const vaccinateStudent = async (req, res) => {
    // res.send('Router is working');
    const vaccineUsage = req.body;

    console.log(vaccineUsage);

    try {
        //const foundDrive = await VaccineDriveData.findOne({ _id: vaccineUsage.driveId});
        //console.log(foundDrive);
        var from = new Date();
        console.log(from);
        var to = date.addDays(from, 7);
        console.log(to);

        var availableDrive;

        //db.collection.find({startTime: {$gt: from, $lt:to}});
        let allDrives = await VaccineDriveData.find( {driveDate: {$gt: from, $lt:to}} );
        if (allDrives.length > 1)
        {
            allDrives.sort( (a, b) => a.driveDate - b.driveDate);
            console.log(allDrives);
        }
        else
        {
            availableDrive = allDrives;
        }

        var openDrives = [];
        allDrives.forEach(drive => {
            if (drive.numberOfVaccines > 0) {
                openDrives.push(drive);
            }
        });

        if (openDrives.length === 0) {
            res.status(201).send("No More Vaccines Available, Drive is over...");
        }
        else
        {

            const selectedDrive = openDrives[0];

            const foundStudent = await StudentData.findOne({ _id: vaccineUsage.studentId});
            console.log(foundStudent);


            var myquery = { _id: selectedDrive._id };
            var newvalues = { $set: { numberOfVaccines: (selectedDrive.numberOfVaccines - 1), driveDate: selectedDrive.driveDate} };
            
            const updatedDrive = await VaccineDriveData.updateOne(myquery, newvalues);

            console.log(updatedDrive);

            myquery = { _id: vaccineUsage.studentId };
            var newvalues = { $set: { date: Date.now(), studentName: foundStudent.studentName, vaccineStatus: true, vaccineName: foundStudent.vaccineName} };
            const updatedStudent = await StudentData.updateOne(myquery, newvalues);

            console.log(updatedStudent);

            var vaccineApplied = {...updatedDrive, ...updatedStudent}

                res.status(201).json(vaccineApplied);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}