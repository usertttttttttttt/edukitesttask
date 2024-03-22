import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MaterialDetails, SearchScreen} from 'modules/search';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Search'}>
      <Stack.Screen name={'Search'} component={SearchScreen} />
      <Stack.Screen
        options={{title: 'Material'}}
        name={'MaterialDetails'}
        component={MaterialDetails}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
