import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import { selectFullName, selectPhoneNumber } from '../../src/slices/formSlice';
import { useSelector } from 'react-redux';

const PDFGenerator = () => {
  const fullName = useSelector(selectFullName);
  const phoneNumber = useSelector(selectPhoneNumber);
  return (
    <div>
      <h2>Generated PDF</h2>
      <PDFDownloadLink document={<MyDocument fullName={fullName} phoneNumber={phoneNumber} />} fileName="invoice.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFGenerator;
