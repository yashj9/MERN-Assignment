import StudentData from "../models/student.js";

export const getFilteredData = async (req, res) => {
    // res.send('Router is working');
    try {
        const allStudents = await StudentData.find();

        console.log(allStudents);

        const filter = req.query.filterCriteria;

        let filteredStudents = allStudents;

        if (filter != "all") {
            const isTrueSet = (filter.toLowerCase() === "true");
            filteredStudents = allStudents.filter( student => (student.vaccineStatus === isTrueSet));
        }

        console.log(filteredStudents.length);

        console.log(filteredStudents);

        const returnData = filteredStudents;

        res.status(200).json(returnData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
