import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icon library
import Home from './Home';
import TabBar from './TabBar'

const Tab = createBottomTabNavigator();

// Placeholder for Search component
const SearchPlaceholder = () => (
    <></> // Empty fragment that doesn't render anything
)

// Placeholder for Map component
const MapPlaceholder = () => (
    <></> // Empty fragment that doesn't render anything
)

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="home" // Default screen
                tabBar={(props) => <TabBar {...props} />}
            >
                <Tab.Screen
                    name="search"
                    component={SearchPlaceholder}
                />
                <Tab.Screen
                    name="home"
                    component={Home}
                />
                <Tab.Screen
                    name="map"
                    component={MapPlaceholder}
                />
            </Tab.Navigator>
        </NavigationContainer>
        /*<NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="search"
                    component={SearchPlaceholder}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="search" size={32} color='black' />
                        ),
                    }}
                />
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='home-outline' size={32} color='black' />
                        ),
                    }}
                />
                <Tab.Screen
                    name="map"
                    component={MapPlaceholder}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='compass-outline' size={32} color='black' />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>*/
    );
};

export default Navigation;
