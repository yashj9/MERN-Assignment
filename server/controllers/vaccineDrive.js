import VaccineDriveData from "../models/vaccineDrive.js";

export const getDrives = async (req, res) => {
    // res.send('Router is working');
    try {
        const allDrives = await VaccineDriveData.find();

        res.status(200).json(allDrives);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDrive = async (req, res) => {
    // res.send('Router is working');
    const drive = req.body;

    console.log(drive);

    const newDrive = new VaccineDriveData(drive);

    console.log(newDrive);

    try {
        await newDrive.save();
        res.status(201).json(newDrive);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const editDrive = async (req, res) => {
    // res.send('Router is working');
    const drive = req.body;

    console.log(drive);

    try {
        const foundDrive = await VaccineDriveData.findOne({ _id: drive.id});

        console.log(foundDrive);
        var myquery = { _id: drive.id };
        var newvalues = { $set: { numberOfVaccines: drive.numberOfVaccines, driveDate: drive.driveDate} };
            const updatedDrive = await VaccineDriveData.updateOne(myquery, newvalues);
            res.status(201).json(updatedDrive);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

