import React from 'react'
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const MyDocument = ({ fullName, phoneNumber }) => {
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.section}>Invoice</Text>
      <Text style={styles.section}>Full Name: {fullName}</Text>
      <Text style={styles.section}>Phone Number: {phoneNumber}</Text>
    </Page>
  </Document>
  )
}

export default MyDocument
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });