import React, { useContext } from "react";
import { appActionTypes, AppStore } from "../../context/AppContext";
import MenuButtons from "./MenuButtons";

const Sidebar = () => {
  const buttons = ["Add/Manage Student Details", "Manage/Update Vaccine Status", "Generate Report", "Manage Vaccine Drives"];
  const { appActionDispatch } = useContext(AppStore);
  const handleMenuClick = (e) => {
    const index = buttons.findIndex((ele) => ele === e.target.innerText);
    appActionDispatch({
      type: appActionTypes.setCurrentLandingPage,
      payload: index + 1,
    });
  };
  return (
    <div className='sidebar'>
      {buttons.map((item, index) => (
        <MenuButtons
          key={index}
          btnName={item}
          handleSideMenuClick={handleMenuClick}
        />
      ))}
    </div>
  );
};

export default Sidebar;
