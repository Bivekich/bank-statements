import React from 'react';
import { Box, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const UserTypeSelection = ({ userType, handleUserTypeChange }) => (
  <Box mt={4}>
    <Typography variant="h6">Тип пользователя</Typography>
    <RadioGroup row value={userType} onChange={handleUserTypeChange}>
      <FormControlLabel value="personal" control={<Radio />} label="Персонал" />
      <FormControlLabel value="business" control={<Radio />} label="Бизнес" />
    </RadioGroup>
  </Box>
);

export default UserTypeSelection;
