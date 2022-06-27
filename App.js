import { View, Text } from 'react-native'
import React from 'react'
import Header from './src/components/Layout/Header'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View>
      <Header />
      <HomeScreen/>
    </View>
  )
}

export default App