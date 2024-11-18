import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setInputValue} from '../store/operationSlice';

const HomeScreen = ({navigation}) => {
  const [inputValue, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSetInput = () => {
    dispatch(setInputValue(Number(inputValue) || 0));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Initial Value</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInput}
      />
      <Button title="Set Value" onPress={handleSetInput} />

      <View style={styles.buttonGroup}>
        <Button
          title="Go to Add Screen"
          onPress={() => {
            handleSetInput();
            navigation.navigate('Operations', {screen: 'Add'});
          }}
        />
        <Button
          title="Go to Subtract Screen"
          onPress={() => {
            handleSetInput();
            navigation.navigate('Operations', {screen: 'Subtract'});
          }}
        />
        <Button
          title="Go to Multiply Screen"
          onPress={() => {
            handleSetInput();
            navigation.navigate('Operations', {screen: 'Multiply'});
          }}
        />
        <Button
          title="Go to Divide Screen"
          onPress={() => {
            handleSetInput();
            navigation.navigate('Operations', {screen: 'Divide'});
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
  buttonGroup: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
});

export default HomeScreen;
