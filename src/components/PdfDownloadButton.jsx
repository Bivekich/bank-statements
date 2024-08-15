import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import { Button } from '@mui/material';

const PdfDownloadButton = ({ selectedBank, userType, formData, period, transactions }) => (
  <PDFDownloadLink
    document={<MyDocument bank={selectedBank} userType={userType} formData={formData} period={period} transactions={transactions} />}
    fileName="bank-information.pdf"
  >
    {({ loading }) => (loading ? 'Загрузка документа...' : <Button variant="contained">Скачать PDF</Button>)}
  </PDFDownloadLink>
);

export default PdfDownloadButton;
