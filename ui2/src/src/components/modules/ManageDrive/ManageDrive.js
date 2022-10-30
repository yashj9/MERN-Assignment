import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import StudentsTable from "../AllStudents/StudentsTable";

const ManageDrive = () => {
    const [drive, setDrive] = React.useState({
        driveDate: "",
        numberOfVaccines: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("F", e);

        try {
            const data = await axios.post("http://localhost:5000/drives", drive);
            if (data) {
                const notify = () => toast("Drive Added Successfully 😲!");
                notify();
            }
            console.log("#DD>", data);
            setDrive({
                driveDate: "",
                numberOfVaccines: "",
            });
            return data;
        } catch (err) {
            console.log("error: ", err);
        }
    };

    console.log(drive);

    return (
        <div className="dashboard-main">
            <form className="drive-form " onSubmit={handleSubmit}>
                <div className="col-6 mb-4">
                    <label htmlFor="driveDate" className="mb-2">
                        Drive Date
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="driveDate"
                        placeholder="Date (YYYY-MM-DD)"
                        value={drive.driveDate}
                        onChange={(event) => {
                            setDrive({ ...drive, driveDate: event.target.value });
                        }}
                    />
                </div>
                <div className="col-6 mb-4">
                    <label htmlFor="numberOfVaccines" className="mb-2">
                        Number of Vaccines
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="numberOfVaccines"
                        placeholder="# of Vaccines"
                        value={drive.numberOfVaccines}
                        onChange={(event) => {
                            setDrive({ ...drive, numberOfVaccines: event.target.value });
                        }}
                    />
                </div>
                <div className="col-6 mb-3">
                    <button type="submit" className="btn btn-primary mb-3">
                        Submit
                    </button>
                </div>
            </form>
            <StudentsTable />
        </div>
    );
};

export default ManageDrive;
