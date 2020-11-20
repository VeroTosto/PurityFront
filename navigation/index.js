import React from 'react';
import { Container, Footer, FooterTab, Button} from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Cartas from './../pantallas/Cartas';
import Recomendaciones from '../pantallas/Recomendaciones';
import Mapa from '../pantallas/Mapa';
import LogIn from '../pantallas/LogIn';
import SignUp from '../pantallas/SignUp';
import User from '../pantallas/User';
import RecSalud from '../pantallas/RecSalud';
import RecReciclaje from '../pantallas/RecReciclaje';
import RecProductos from '../pantallas/RecProductos';
import RecHogar from '../pantallas/RecHogar';
import RecOrg from '../pantallas/RecOrg';
import RecPlantas from '../pantallas/RecPlantas';
import { faCheckSquare,faMapMarkerAlt, faCloud, faInfoCircle, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const HomeStack = createBottomTabNavigator(
  {
    Mediciones: Cartas,
    Mapa: Mapa,
    Tips: Recomendaciones,
    Usuario: User,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Mediciones') {
          iconName = faCloud;
        } else if (routeName === 'Mapa') {
          iconName = faMapMarkerAlt;
        } else if (routeName === 'Tips') {
          iconName = faCheckSquare;
        } else if (routeName === 'Info') {
          iconName = faInfoCircle;
        } else if (routeName === 'Usuario') {
          iconName = faUser;
        }

        // You can return any component that you like here!
        return <FontAwesomeIcon icon={iconName} size={22} color={tintColor}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#75D16B',
      inactiveTintColor: 'gray',
    },
  }
);


const MyNav = createStackNavigator({
  LogIn: { screen: LogIn },
  SignUp: {screen: SignUp},
  RecSalud: {screen: RecSalud},
  RecHogar: {screen: RecHogar},
  RecReciclaje: {screen: RecReciclaje},
  RecProductos: {screen: RecProductos},
  RecOrg: {screen: RecOrg},
  RecPlantas: {screen: RecPlantas},
  Home: { screen: HomeStack, params: {valor: 200, valorRuido: 60},},
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});


export default createAppContainer(MyNav);