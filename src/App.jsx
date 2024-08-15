import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import BankSelection from './components/BankSelection';
import UserTypeSelection from './components/UserTypeSelection';
import AccountInformationForm from './components/AccountInformationForm';
import TransactionList from './components/TransactionList';
import DateRangePicker from './components/DateRangePicker';
import PdfDownloadButton from './components/PdfDownloadButton';

const App = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    accountNumber: '',
    routingNumber: '',
    balanceStart: '',
    balanceEnd: '',
  });
  const [period, setPeriod] = useState({ start: '', end: '' });
  const [transactions, setTransactions] = useState([]);

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
    setUserType('personal');
    setTransactions([]);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTransactionChange = (index, event) => {
    const { name, value } = event.target;
    const newTransactions = [...transactions];
    newTransactions[index] = { ...newTransactions[index], [name]: value };
    setTransactions(newTransactions);
  };

  const addTransaction = () => {
    setTransactions([...transactions, { date: '', description: '', type: 'income', amount: '', balance: '' }]);
  };

  const removeTransaction = (index) => {
    const newTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(newTransactions);
  };

  return (
    <Container>
      <Box mt={4}>
      <Typography variant="h4" gutterBottom>
          Выберите банк
        </Typography>
        <BankSelection selectedBank={selectedBank} handleBankChange={handleBankChange} />
        {selectedBank === 'Bank of America' && (
          <UserTypeSelection userType={userType} handleUserTypeChange={handleUserTypeChange} />
        )}
        {selectedBank && (
          <>
            <AccountInformationForm formData={formData} handleInputChange={handleInputChange} />
            <DateRangePicker period={period} setPeriod={setPeriod} />
            <TransactionList
              transactions={transactions}
              handleTransactionChange={handleTransactionChange}
              addTransaction={addTransaction}
              removeTransaction={removeTransaction}
            />
            {selectedBank && userType && (
              <PdfDownloadButton
                selectedBank={selectedBank}
                userType={userType}
                formData={formData}
                period={period}
                transactions={transactions}
              />
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default App;
