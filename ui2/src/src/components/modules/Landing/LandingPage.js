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
      const data = await axios.get("https://api.agify.io/?name=shweta");
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
  return (
    <div className='dashboard-main'>
      <div className='d-flex card-container'>
        <div className='card'>
          <div className='card-body'>
            <h6 className='card-title'>Number of students vaccinated</h6>
            <span className='card-text'>20/100</span>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h6 className='card-title'>Upcoming vaccination drives</h6>
            <span className='card-text'>No Drive</span>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            {loading ? "Loading..." : JSON.stringify(appData, null, 3)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
