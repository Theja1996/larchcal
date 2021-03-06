/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { View, Text } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/Home';
import Splash from './Components/Splash';
import DetailsScreen from './Components/Details';
import DetailsScreen1 from './Components/DetailsNeketh';
import DetailsScreen2 from './Components/DetailsAyaWeya';
import DetailsScreen3 from './Components/DetailsDina';
import DetailsScreen4 from './Components/DetailsAnshaka';
import DetailsScreen5 from './Components/DetailsRashi';
import DetailsScreen6 from './Components/DetailsThithi';
import DetailsScreen7 from './Components/DetailsWansha';
import DetailsScreen8 from './Components/DetailsDewatha';
import DetailsScreen9 from './Components/DetailsAyusha';
import DetailsScreen10 from './Components/Converter';

//  function HomeScreen() {
//    return (
//      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text>Home Screen</Text>
//      </View>
//    );
//  }
 
 const Stack = createNativeStackNavigator();
 
 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="HomeScreen" >
       <Stack.Screen
          name="                          Powered By"
          component={Splash}
          navigationOptions={{
            header: null,
          }}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerLeft: null,
            
          }}
        />

         <Stack.Screen name="Welcome !" component={HomeScreen} 
         
         navigationOptions={{
          header: null,
       
        }}
          options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft:null,
            headerLeft: () => {         return <View style={{ marginLeft: 50 }}></View>; }
          }}/>
         <Stack.Screen name="?????????????????? ???????????????????????????" component={DetailsScreen} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
      
       <Stack.Screen name="?????????????????? ????????????????????????" component={DetailsScreen1} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
             <Stack.Screen name="??????-????????? ????????????????????????" component={DetailsScreen2} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
             <Stack.Screen name="????????? ????????????????????????" component={DetailsScreen3} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
            <Stack.Screen name="???????????? ????????????????????????" component={DetailsScreen4} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
             <Stack.Screen name="???????????? ????????????????????????" component={DetailsScreen5} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
            <Stack.Screen name="???????????? ????????????????????????" component={DetailsScreen6} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
             <Stack.Screen name="????????? ????????????????????????" component={DetailsScreen7} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
               <Stack.Screen name="??????????????? ????????????????????????" component={DetailsScreen8} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
             <Stack.Screen name="???????????? ????????????????????????" component={DetailsScreen9} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
               <Stack.Screen name="?????????????????? ???????????????????????????" component={DetailsScreen10} options={{
            headerStyle: {
              backgroundColor: '#3F51B5',
            },
            headerTintColor: '#fff',
            headerLeft: null  }}/>
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;