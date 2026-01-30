import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InboxScreen from '../screens/InboxScreen'
import React from 'react'



const Stack = createNativeStackNavigator()
const AppNavigator = () => {
  return (
    <View>
      <Text>AppNavigator</Text>
    </View>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})