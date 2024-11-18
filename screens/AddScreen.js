import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addByAmount} from '../store/operationSlice';
import analytics from '@react-native-firebase/analytics';

const AddScreen = () => {
  const [amount, setAmount] = useState('');
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleAdd = async () => {
    const value = Number(amount) || 0;
    console.log('added');
    await analytics().logEvent('button_pressed', {
      name: 'Add',
    });

    if (value > 50) {
      await analytics().logEvent('high_input_value', {amount: value});
    } else if (value < 50) {
      await analytics().logEvent('low_input_value', {amount: value});
    }

    dispatch(addByAmount(value));
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
      <Button title="Add Amount" onPress={handleAdd} />
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

export default AddScreen;
