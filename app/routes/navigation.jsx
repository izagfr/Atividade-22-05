import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcons from '@expo/vector-icons/Ionicons';

// páginas
import Login from '../pages/login';
import Atendimentos from '../pages/atendimentos';
import Profissionais from '../pages/profissionais';
import Registro from '../pages/registro';

// navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Draw = createDrawerNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                headerStyle: {
                    backgroundColor: '#5B7CFA',
                },

                headerTintColor: '#fff',

                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },

                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 65,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingBottom: 8,
                    paddingTop: 5,
                    position: 'absolute',
                    elevation: 10,
                },

                tabBarLabelStyle: {
                    fontSize: 13,
                    fontWeight: '600',
                },

                tabBarActiveTintColor: '#FF914D',
                tabBarInactiveTintColor: '#777',

                tabBarIcon: ({ color, size, focused }) => {

                    let iconName = 'ellipse-outline';

                    if (route.name === 'Atendimentos') {
                        iconName = focused
                            ? 'calendar'
                            : 'calendar-outline';
                    }

                    if (route.name === 'Profissionais') {
                        iconName = focused
                            ? 'people'
                            : 'people-outline';
                    }

                    return (
                        <IonIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
        >

            <Tab.Screen
                name='Atendimentos'
                component={Atendimentos}
            />

            <Tab.Screen
                name='Profissionais'
                component={Profissionais}
            />

        </Tab.Navigator>
    );
}

function MenuSuperior() {

    return (
        <Draw.Navigator
            screenOptions={({ route }) => ({

                headerStyle: {
                    backgroundColor: '#5B7CFA',
                },

                headerTintColor: '#fff',

                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },

                drawerStyle: {
                    backgroundColor: '#fff',
                    width: 260,
                },

                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: '600',
                },

                drawerActiveBackgroundColor: '#FFE4D6',

                drawerActiveTintColor: '#FF914D',

                drawerInactiveTintColor: '#777',

                drawerIcon: ({ color, size, focused }) => {

                    let iconName = 'ellipse-outline';

                    if (route.name === 'Início') {
                        iconName = focused
                            ? 'paw'
                            : 'paw-outline';
                    }

                    if (route.name === 'Atendimentos') {
                        iconName = focused
                            ? 'calendar'
                            : 'calendar-outline';
                    }

                    if (route.name === 'Profissionais') {
                        iconName = focused
                            ? 'people'
                            : 'people-outline';
                    }

                    return (
                        <IonIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
        >

            <Draw.Screen
                name='Início'
                component={Tabs}
            />

            <Draw.Screen
                name='Atendimentos'
                component={Atendimentos}
            />

            <Draw.Screen
                name='Profissionais'
                component={Profissionais}
            />

        </Draw.Navigator>
    );
}

export default function Rotas() {

    return (
        <Stack.Navigator>

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Registro'
                component={Registro}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Principal'
                component={MenuSuperior}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}