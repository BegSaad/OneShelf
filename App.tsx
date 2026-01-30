import { StyleSheet, Text, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

import React from 'react'

const App = () => {
  return (
   <PaperProvider>
    <NavigationContainer>
     <AppNavigator />
    </NavigationContainer>
   </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({})