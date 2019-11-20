import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    Button,
    SafeAreaView
    
} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome'


const Categorias = props => {
    return (

        <View  style={styles.container}>
          <Button title="Go to Details" onPress={() => { props.navigation.navigate('Footer') }}/>
        </View>
    )
}

 const styles = StyleSheet.create({
    container: {
      
        flexDirection: 'row',
        height: 480,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 5,
        flex: -5,
    },

   
})

export default Categorias