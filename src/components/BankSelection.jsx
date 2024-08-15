import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const banks = [
  'Bank of America',
  'Chase Bank',
  'BMO',
];

const BankSelection = ({ selectedBank, handleBankChange }) => (
  <TextField
    select
    label="Банк"
    value={selectedBank}
    onChange={handleBankChange}
    fullWidth
  >
    {banks.map((bank) => (
      <MenuItem key={bank} value={bank}>
        {bank}
      </MenuItem>
    ))}
  </TextField>
);

export default BankSelection;
