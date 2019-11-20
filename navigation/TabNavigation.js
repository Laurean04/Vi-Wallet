import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Cuentas from '../components/Cuentas';
import Categorias from '../components/Categorias';
import Resumen from '../components/Resumen';
import Icon from 'react-native-vector-icons/FontAwesome'



const TabNavigation = createBottomTabNavigator({
	Cuentas: {
		screen: Cuentas,
		title: 'Cuentas',
		navigationOptions: {
			tabBarIcon: ({tintColor}) => {
				return  <Icon 
                    name="credit-card"
                    color={tintColor}
                    size={22}
                />
			}
		}
	},
	
	Categorias: {
		screen: Categorias,
		title: 'Categorias',
		navigationOptions: {
			tabBarIcon: ({tintColor}) => {
				return  <Icon 
                    name="pie-chart"
                    color={tintColor}
                    size={22}
                />
			}
		}

	},

	Resumen: {
		screen: Resumen,
		title: 'Resumen',
		navigationOptions: {
			tabBarIcon: ({tintColor}) => {
				return  <Icon 
                    name="file"
                    color={tintColor}
                    size={22}
                />
			}
		}

	}
});


export default createAppContainer(TabNavigation);