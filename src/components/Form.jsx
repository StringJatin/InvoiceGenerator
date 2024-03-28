// FormInput.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFullName, updatePhoneNumber, selectFullName, selectPhoneNumber } from '../slices/formSlice';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const FormInput = () => {
  const dispatch = useDispatch();
  const fullName = useSelector(selectFullName);
  const phoneNumber = useSelector(selectPhoneNumber);

  const handleFullNameChange = (e) => {
    dispatch(updateFullName(e.target.value));
  };

  const handlePhoneNumberChange = (e) => {
    dispatch(updatePhoneNumber(e.target.value));
  };

  const DownloadButton = () => {
    return (
      <PDFDownloadLink document={<MyDocument fullName={fullName} phoneNumber={phoneNumber} />} fileName="invoice.pdf">
      <button>Download</button>
      </PDFDownloadLink>
    );
  };

  return (
    <div>
      <input type="text" value={fullName} onChange={handleFullNameChange} />
      <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <DownloadButton />
          </div>
  );
};

export default FormInput;
