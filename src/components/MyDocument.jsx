import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const SimpleDocument = ({ bank, userType, formData, transactions }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.text}>Банк: {bank}</Text>
      <Text style={styles.text}>Тип пользователя: {userType}</Text>
      <Text style={styles.text}>Имя: {formData.name}</Text>
      <Text style={styles.text}>Адрес: {formData.address}</Text>
      <Text style={styles.text}>Номер аккаунта: {formData.accountNumber}</Text>
      <Text style={styles.text}>Routing номер: {formData.routingNumber}</Text>
      <Text style={styles.text}>Баланс начало: {formData.balanceStart}</Text>
      <Text style={styles.text}>Баланс конец: {formData.balanceEnd}</Text>
      <Text style={styles.text}>Период: {formData.period}</Text>

      <Text style={styles.text}>Транзакции:</Text>
      {transactions.map((transaction, index) => (
        <Text key={index} style={styles.text}>
          Дата: {transaction.date}, Название: {transaction.description}, Тип: {transaction.type}, Сумма: {transaction.amount}, Баланс: {transaction.balance}
        </Text>
      ))}
    </Page>
  </Document>
);

export default SimpleDocument;
