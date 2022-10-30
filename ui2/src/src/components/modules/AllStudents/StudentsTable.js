import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { appActionTypes, AppStore } from "../../../context/AppContext";

function StudentsTable() {

    const { appActionDispatch } = useContext(AppStore);
    const getStudents = async () => {
        appActionDispatch({
            type: appActionTypes.setLoader,
            payload: true,
        });
        try {
            const data = await axios.get("http://localhost:5000/students");
            console.log(data);
            if (data) {
            appActionDispatch({
                type: appActionTypes.setStudentTable,
                payload: data.data,
            });
            /* appActionDispatch({
                type: appActionTypes.setLoader,
                payload: false,
            }); */
            }
            console.log("#DD>", data);
            return data;
        } catch (err) {
            console.log("error: ", err);
        }
    };

    useEffect(() => {
        getStudents();
    }, []);

    const { appState } = useContext(AppStore);
    const { studentsData, loading } = appState;
    console.log(studentsData);


    return (
        <div>StudentsTable</div>
    )
}

export default StudentsTable