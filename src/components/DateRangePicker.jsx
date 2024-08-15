import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDateInput = styled('input')(({ theme }) => ({
  padding: '12px',
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  '&:focus': {
    borderColor: theme.palette.primary.main,
    outline: 'none',
  },
}));

const DateRangePicker = ({ period, setPeriod }) => (
  <Box>
    <Typography variant="h6">Период</Typography>
    <Box display="flex" gap={2}>
      <StyledDateInput
        type="date"
        value={period.start}
        onChange={(e) => setPeriod((prev) => ({ ...prev, start: e.target.value }))}
      />
      <StyledDateInput
        type="date"
        value={period.end}
        onChange={(e) => setPeriod((prev) => ({ ...prev, end: e.target.value }))}
      />
    </Box>
  </Box>
);

export default DateRangePicker;
