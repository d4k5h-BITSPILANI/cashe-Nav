import {TabNavigator} from './RootStack';
import HomeScreen from './HomeScreen';

export const screens = [
  {
    title: 'Home Screen',
    screen: HomeScreen,
  },
  {
    title: 'Operations',
    screen: TabNavigator,
  },
];
