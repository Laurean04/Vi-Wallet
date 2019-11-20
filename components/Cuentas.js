import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Agregar from '../components/Agregar'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    Button,
    SafeAreaView
    
} from 'react-native'


const Cuentas = props => {
    return (

        <View>
            <View style={styles.text}>
                <Text>Cuentas</Text>
            </View>
            
            <View style={styles.container}>
                <Icon style={styles.iconcard}
                    reverse 
                    name="credit-card"
                    size={60}
                 />

                <Text>Tarjeta</Text>

                <Button 
                    title="Agregar"
                    type="outline"
                    onPress={() => { props.navigation.navigate('Agregar') }}
                />

            </View>

            <View style={styles.container}>
                <Icon style={styles.icondollar}
                    name="dollar"
                    size={50}
                />

                <Text>Efectivo</Text>

                <Button
                  title="Agregar"
                   type="outline"
                />

            </View>

        </View>

    
    )
}



 const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 20,
        paddingTop: 5,
        flex: -5,
        margin: 10,
        marginTop: 30,
    },

    text: {

        justifyContent: 'center',
        alignItems: 'center',
    }, 

     iconcard: {

        backgroundColor: "#6A0888",
        borderRadius: 5,
        color: "#FFFF",
        height: 70,
        width: 70,
    },

    icondollar: {

        backgroundColor: "#04B4AE",
        borderRadius: 5,
        color: "#FFFF",
        height: 70,
        width: 70,
    },
})
export default Cuentas