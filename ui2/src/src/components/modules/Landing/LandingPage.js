import axios from "axios";
import React, { useContext, useEffect } from "react";
import { appActionTypes, AppStore } from "../../../context/AppContext";

const LandingPage = () => {
  const { appActionDispatch } = useContext(AppStore);
  const getRandomUser = async () => {
    appActionDispatch({
      type: appActionTypes.setLoader,
      payload: true,
    });
    try {
      const data = await axios.get("http://localhost:5000/landingDetails");
      if (data) {
        appActionDispatch({
          type: appActionTypes.setAppData,
          payload: data.data,
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

  useEffect(() => {
    getRandomUser();
  }, []);
  const { appState } = useContext(AppStore);
  const { appData, loading } = appState;
  console.log(appData);
  return (
    <div className='dashboard-main'>
      <div className='d-flex card-container'>
        <div className='card'>
          <div className='card-body'>
            <h6 className='card-title'>Number of students vaccinated</h6>
            <span className='card-text'>{`${appData?.vaccinatedStudents}/${appData?.studentsCount}`}</span>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h6 className='card-title'>Upcoming vaccination drives</h6>
            <span className='card-text'>{appData?.drivesCount === 0 ? "No Drive" : appData?.drivesCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
