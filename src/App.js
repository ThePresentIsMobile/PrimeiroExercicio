import React from 'react'
import { View, StyleSheet } from 'react-native'

import Simple from './components/simple'
import ParImpar from './components/ParImpar'
import { Invert, MegaSena } from './components/Multi'

export default class App extends React.Component {
    render(){
      return(
          <View style={styles.container}>
            <Simple texto="I'm a React Component!!" />
            <ParImpar numero={34} />
            <Invert texto="React Native" />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  //Key = Style name
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    f20: {
      fontSize: 40,
      color: 'red'
    }
  })
