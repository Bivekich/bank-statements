import React from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material"; // Добавьте Typography здесь
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const TransactionList = ({
  transactions,
  handleTransactionChange,
  addTransaction,
  removeTransaction,
}) => (
  <Box mt={4} mb={4}>
    <Typography variant="h6">Транзакции</Typography>
    {transactions.map((transaction, index) => (
      <Box key={index} mb={2} p={2} border={1} borderRadius={1}>
        <TextField
          // label="Дата"
          name="date"
          value={transaction.date}
          onChange={(event) => handleTransactionChange(index, event)}
          fullWidth
          margin="normal"
          type="date"
        />
        <TextField
          select
          label="Тип"
          name="type"
          value={transaction.type}
          onChange={(event) => handleTransactionChange(index, event)}
          fullWidth
          margin="normal"
        >
          <MenuItem value="deposit">Deposit</MenuItem>
          <MenuItem value="withdrawal">Withdrawal</MenuItem>
          <MenuItem value="check">Check</MenuItem>
          <MenuItem value="daily_balances">Daily ledger balances</MenuItem>
        </TextField>
        <TextField
          label="Description (Если чек, то номер чека. Если дневной баланс, то оставить пустым)"
          name="description"
          value={transaction.description}
          onChange={(event) => handleTransactionChange(index, event)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Сумма"
          name="amount"
          value={transaction.amount}
          onChange={(event) => handleTransactionChange(index, event)}
          fullWidth
          margin="normal"
        />
        <IconButton onClick={() => removeTransaction(index)}>
          <RemoveIcon />
        </IconButton>
      </Box>
    ))}
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={addTransaction}
    >
      Добавить транзакцию
    </Button>
  </Box>
);

export default TransactionList;
