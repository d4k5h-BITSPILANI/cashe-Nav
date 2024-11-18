import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from './screen';
import AddScreen from './AddScreen';
import DivideScreen from './DivideScreen';
import MultiplyScreen from './MultiplyScreen';
import SubtractScreen from './SubtractScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabs = {
  Add: AddScreen,
  Subtract: SubtractScreen,
  Multiply: MultiplyScreen,
  Divide: DivideScreen,
};

export const TabNavigator = () => (
  <Tab.Navigator>
    {Object.entries(tabs).map(([title, screen], index) => (
      <Tab.Screen key={index} name={title} component={screen} />
    ))}
  </Tab.Navigator>
);

const RootStack = () => {
  return (
    <Stack.Navigator>
      {screens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.title}
          component={screen.screen}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootStack;
