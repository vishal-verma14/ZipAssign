import React from 'react';
import 'react-native-gesture-handler';
import SearchScreen from './src/screens/SearchScreen';
import BaseScreen from './src/screens/BaseScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Store from './src/utils/reducers/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
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
    </Provider>
  );
};

export default App;
