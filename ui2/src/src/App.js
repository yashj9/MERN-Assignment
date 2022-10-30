import React, { useContext } from "react";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Main from "./components/common/Main";
import Landing from "./components/modules/Home/HomePage";
import { AppStore } from "./context/AppContext";
import HomePage from "./components/modules/Home/HomePage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const { appState } = useContext(AppStore);
  // const { counter } = appState;
  // console.log("??", appState);
  return (
    <div className='App'>
      <ToastContainer />
      <Header />
      <Main>
        <Sidebar />
        <HomePage />
      </Main>
    </div>
  );
};

export default App;
