import VaccineDriveData from "../models/vaccineDrive.js";
import StudentData from "../models/student.js";
import date from 'date-and-time';

export const getLandingDetails = async (req, res) => {
    // res.send('Router is working');
    try {
        var from = new Date();
        console.log(from);
        var to = date.addDays(from, 7);
        console.log(to);

        //db.collection.find({startTime: {$gt: from, $lt:to}});
        const allDrives = await VaccineDriveData.find( {driveDate: {$gt: from, $lt:to}} );
        const allStudents = await StudentData.find();

        console.log(allStudents);

        const vaccinatedStudents = allStudents.filter( student => (student.vaccineStatus === true));
        console.log(vaccinatedStudents);

        console.log(allDrives.length);
        console.log(allStudents.length);

        var openDrives = [];
        allDrives.forEach(drive => {
            if (drive.numberOfVaccines > 0) {
                openDrives.push(drive);
            }
        });

        console.log(openDrives);

        const returnData = { drivesCount: openDrives.length, studentsCount: allStudents.length, vaccinatedStudents:  vaccinatedStudents.length};

        res.status(200).json(returnData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
