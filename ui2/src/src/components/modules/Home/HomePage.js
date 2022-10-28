import React, { useContext } from "react";
import { AppStore } from "../../../context/AppContext";
import StudentDetails from "../AddStudents/StudentDetails";
import GenerateReport from "../GenerateReport/GenerateReport";
import LandingPage from "../Landing/LandingPage";
import VaccineStatus from "../VaccineStatus/VaccineStatus";
import ManageDrive from "../ManageDrive/ManageDrive";

const HomePage = () => {
  const { appState } = useContext(AppStore);
  const { defaultLandingPage } = appState;

  return (
    <>
      {defaultLandingPage === 0 && <LandingPage />}
      {defaultLandingPage === 1 && <StudentDetails />}
      {defaultLandingPage === 2 && <VaccineStatus />}
      {defaultLandingPage === 3 && <GenerateReport />}
      {defaultLandingPage === 4 && <ManageDrive />}
    </>
  );
};

export default HomePage;
