import React from 'react';
import { TextField, Box, Typography } from '@mui/material';

const AccountInformationForm = ({ formData, handleInputChange }) => (
  <Box mt={4}>
    <Typography variant="h6">Введите данные</Typography>
    <TextField
      label="Имя"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Адрес"
      name="address"
      value={formData.address}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Номер аккаунта"
      name="accountNumber"
      value={formData.accountNumber}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Routing номер"
      name="routingNumber"
      value={formData.routingNumber}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Баланс начало"
      name="balanceStart"
      value={formData.balanceStart}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Баланс конец"
      name="balanceEnd"
      value={formData.balanceEnd}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
  </Box>
);

export default AccountInformationForm;
