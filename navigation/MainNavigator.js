import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Image} from 'react-native'
import TabNavigator from './TabNavigation';
import Categorias from '../components/Categorias';
import Cuentas from '../components/Cuentas';
import Agregar from '../components/Agregar';

const MainNavigator = createStackNavigator({
	Main: TabNavigator,
	Agregar: Agregar,
	Details: {
		screen: Cuentas
	},

	Aceptar:{
		screen:Cuentas
	}
});



export default createAppContainer(MainNavigator);