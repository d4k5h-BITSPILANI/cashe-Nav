import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {subtractByAmount} from '../store/operationSlice';
import analytics from '@react-native-firebase/analytics';

const SubtractScreen = () => {
  const [amount, setAmount] = useState('');
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleSubtract = async () => {
    console.log('Subtracted');
    await analytics().logEvent('button_pressed', {
      name: 'Subtract',
    });
    dispatch(subtractByAmount(Number(amount) || 0));
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
      <Button title="Subtract Amount" onPress={handleSubtract} />
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
export default SubtractScreen;
