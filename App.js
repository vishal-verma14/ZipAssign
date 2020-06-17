import React from 'react';
import 'react-native-gesture-handler';
import SearchScreen from './src/screens/SearchScreen';
import BaseScreen from './src/screens/BaseScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={() => ({title: 'Search Screen'})}
        />
        <Stack.Screen
          name="Base"
          component={BaseScreen}
          options={() => ({title: 'Base Screen'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
