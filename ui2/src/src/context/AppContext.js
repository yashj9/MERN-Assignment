import produce from "immer";
import React, { createContext, useReducer } from "react";

const initialAppState = {
  themeType: "light",
  counter: 0,
  defaultLandingPage: 0,
  appData: null,
  studentData: [],
  loading: false,
};

const AppStore = createContext(initialAppState);

const appActionTypes = {
  setTheme: "SET_THEME",
  setLoader: "SET_LOADER",
  setCurrentLandingPage: "SET_CURRENT_LANDING_PAGE",
  setAppData: "SET_APP_DATA",
  IncCounter: "INC_COUNTER",
  setStudentData: "SET_STUDENT_TABLE",
};

const AppReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case appActionTypes.setTheme:
      return produce(state, (draftState) => {
        draftState.themeType = action.payload;
      });
    case appActionTypes.setLoader:
      return produce(state, (draftState) => {
        draftState.loading = action.payload;
      });
    case appActionTypes.IncCounter:
      return produce(state, (draftState) => {
        draftState.counter += action.payload;
      });
    case appActionTypes.setCurrentLandingPage:
      return produce(state, (draftState) => {
        draftState.defaultLandingPage = action.payload;
      });
    case appActionTypes.setAppData:
      return produce(state, (draftState) => {
        draftState.appData = action.payload;
      });
    case appActionTypes.setStudentData:
      return produce(state, (draftState) => {
        draftState.studentsData = action.payload;
      });

    default:
      return state;
  }
};

function AppProvider({ children }) {
  const [appState, appActionDispatch] = useReducer(AppReducer, initialAppState);

  return (
    <AppStore.Provider value={{ appState, appActionDispatch }}>
      {children}
    </AppStore.Provider>
  );
}

export { AppStore, appActionTypes, AppProvider, AppReducer };
