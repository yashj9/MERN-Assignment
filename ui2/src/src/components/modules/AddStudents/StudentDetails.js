import axios from "axios";
import React, { useContext } from "react";
import { appActionTypes, AppStore } from "../../../context/AppContext";
import StudentData from "../StudentData/StudentData";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const StudentDetailschema = Yup.object().shape({
  studentName: Yup.string().required("Student name required"),
  vaccineName: Yup.string().required("Vaccine name is required"),
});

const StudentDetails = () => {
  const { appActionDispatch } = useContext(AppStore);
  // const [student, setStudent] = React.useState({
  //   studentName: "",
  //   vaccineName: "",
  // });

  const getAllStudentsData = async () => {
    appActionDispatch({
      type: appActionTypes.setLoader,
      payload: true,
    });
    try {
      const data = await axios.get("http://localhost:5000/students");
      if (data) {
        appActionDispatch({
          type: appActionTypes.setStudentData,
          payload: data.data.data,
        });
        appActionDispatch({
          type: appActionTypes.setLoader,
          payload: false,
        });
      }
      console.log("#DD>", data);
      return data;
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const handleSubmit = async (student) => {
    debugger;
    //student.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:5000/students"
        ,student
      );
      if (data) {
        getAllStudentsData();
        const notify = () => toast("Student Added Successfully 😲!");
        notify();
      }
      console.log("#DD>", data);
      // setStudent({
      //   studentName: "",
      //   vaccineName: "",
      // });
      return data;
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <div className='dashboard-main'>
      <Formik
        initialValues={{
          studentName: "",
          vaccineName: "",
        }}
        validationSchema={StudentDetailschema}
        // onSubmit={handleSubmit}
        className='student-form '
        onSubmit={(values) => {
          handleSubmit(values);
          console.log(values);
          // alert("Form is validated! Submitting the form...");
        }}
      >
        {({ touched, errors, isSubmitting, values }) => {
          console.log("##", errors);

          return (
            <Form>
              <div className='col-6 mb-4'>
                <label htmlFor='studentName' className='mb-2'>
                  Student Name
                </label>
                <Field
                  type='text'
                  className='form-control'
                  id='studentName'
                  name='studentName'
                  placeholder='Student Name'
                />
                <ErrorMessage
                  component='div'
                  name='studentName'
                  className='error'
                />
              </div>
              <div className='col-6 mb-4'>
                <label htmlFor='vaccineName' className='mb-2'>
                  Vaccine
                </label>
                <Field
                  type='text'
                  className='form-control'
                  id='vaccineName'
                  name='vaccineName'
                  placeholder='Vaccine Name'
                />
                <ErrorMessage
                  component='div'
                  name='vaccineName'
                  className='error'
                />
              </div>
              <div className='col-6 mb-3'>
                <button type='submit' className='btn btn-primary mb-3'>
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>

      <StudentData getAllStudentsData={getAllStudentsData} />
    </div>
  );
};

export default StudentDetails;