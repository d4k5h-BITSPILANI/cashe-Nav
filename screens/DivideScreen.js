import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {divideByAmount} from '../store/operationSlice';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
const DivideScreen = () => {
  const [amount, setAmount] = useState('');
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleDivide = async () => {
    const value = Number(amount) || 1;
    console.log(`divide by ${amount}`);
    await analytics().logEvent('button_pressed', {
      name: 'Divide',
    });

    if (amount === 0) {
      crashlytics().log('Divide by zero attempt');
      crashlytics().recordError(new Error('Attempted to divide by zero'));
      crashlytics().crash();
      Alert.alert('Error', 'Cannot divide by zero!');
      return;
    }

    dispatch(divideByAmount(value));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Value: {counter}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Divide Amount" onPress={handleDivide} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    width: '80%',
    textAlign: 'center',
  },
});
export default DivideScreen;
