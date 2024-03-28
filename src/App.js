import React, { useState } from 'react';
import FormInput from './components/Form';
import PDFGenerator from './components/PdfGenerator';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

const App = () => {


  return (
    <div>
      <Navbar/>
      {/* <FormInput/> */}
      <LandingPage/>
    </div>
  );
};

export default App;
