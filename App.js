import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Main from './src/components/Main'
import Segunda from './src/components/Segunda'
import Tercera from './src/components/Tercera'


import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen
          name="Main"
          options={{
            headerTitle: "Nuevo titulo",
          }}
          component={Main}
        />
        <Menu.Screen name="Segunda" component={Segunda} />
        <Menu.Screen name="Tercera" component={Tercera} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}
