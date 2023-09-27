import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListUser } from './page/ListUser';
import { Profile } from './page/Profile';
import PageHeader from './layout/header/PageHeader';
import { PageSideBar } from './layout/sidebar/PageSideBar';
import { EditConvertPrescription } from './page/EditConvertPrescription';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <div >
            <div className="layout-header-wrapper z-20">
              <PageHeader />
            </div>
            <div className="flex h-full w-full">
              <div className="layout-body-left h-full mt-2">
                <PageSideBar />
              </div>
              <Routes>
                <Route path='/' element={<ListUser />} />
                <Route path="/user/:id" element={<Profile />} />
                <Route path="/upload-image/:id" element={<EditConvertPrescription />} />
              </Routes>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
