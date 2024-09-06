import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const AccountInformationForm = ({ formData, handleInputChange }) => (
  <Box mt={4}>
    <Typography variant="h6">Введите данные</Typography>
    {/* <TextField
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
    /> */}
    <TextField
      label="Номер аккаунта"
      name="account_number"
      value={formData.account_number}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Баланс начало"
      name="beggining_summ"
      value={formData.beggining_summ}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Баланс конец"
      name="ending_summ"
      value={formData.ending_summ}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Сумма поступлений"
      name="deposits_summ"
      value={formData.deposits_summ}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Сумма списаний"
      name="withdrawals_summ"
      value={formData.withdrawals_summ}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Сумма списаний чеками"
      name="checks_summ"
      value={formData.checks_summ}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Сумма списаний Service fees"
      name="service_summ"
      value={formData.service_summ}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Средний выступ, баланс (Average ledge, balance)"
      name="average_ledge_balance"
      value={formData.average_ledge_balance}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
  </Box>
);

export default AccountInformationForm;
