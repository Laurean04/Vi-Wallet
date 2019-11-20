import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet,Button, } from 'react-native'




class AsyncStorageExample extends Component {  AsyncStorageExample 
   state = {
      'name': ''
   }
   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
   
   setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   }
   render() {
      return (
         <View style = {styles.container}>
            <Text>Ingrese sus cantidades a su cartera en </Text>
            <TextInput keyboardType="numeric" style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setName}/>
            <Text>
                Total:  
               {this.state.name}
            </Text>
             <Button
                title="Aceptar"
                onPress={() => {props.navigation.navigate('Aceptar') }}
              />
         </View>
      )
   }
}
export default AsyncStorageExample


const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   textInput: {
      margin: 5,
      height: 20,
      width:80,
      borderWidth: 1,
      marginTop:3,
   }
})