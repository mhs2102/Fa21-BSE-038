import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

const DiscountCalculatorApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [savedAmount, setSavedAmount] = useState('');
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const calculateDiscount = () => {
    if (originalPrice.trim() === '' || discountPercentage.trim() === '') {
      alert('Please enter both original price and discount percentage.');
      return;
    }

    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0 || discount > 100) {
      alert('Invalid input. Please enter valid numbers.');
      return;
    }

    const calculatedFinalPrice = price - (price * discount / 100);
    const calculatedSavedAmount = price - calculatedFinalPrice;

    setFinalPrice(calculatedFinalPrice.toFixed(2));
    setSavedAmount(calculatedSavedAmount.toFixed(2));

    const calculation = {
      originalPrice: price.toFixed(2),
      discountPercentage: discount.toFixed(2),
      finalPrice: calculatedFinalPrice.toFixed(2),
      savedAmount: calculatedSavedAmount.toFixed(2)
    };

    setHistory([...history, calculation]);
  };

  const renderCalculationItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text>{item.originalPrice} - {item.discountPercentage}% = {item.finalPrice}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Original Price"
        value={originalPrice}
        onChangeText={(value) => {
          setOriginalPrice(value);
          setFinalPrice('');
          setSavedAmount('');
        }}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Discount Percentage"
        value={discountPercentage}
        onChangeText={(value) => {
          setDiscountPercentage(value);
          setFinalPrice('');
          setSavedAmount('');
        }}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calculateDiscount}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {finalPrice !== '' && savedAmount !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Final Price: ${finalPrice}</Text>
          <Text style={styles.resultText}>You Save: ${savedAmount}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.historyButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>View History</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Calculation History</Text>
          <FlatList
            data={history}
            renderItem={renderCalculationItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  historyButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyItem: {
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  resultContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DiscountCalculatorApp;
