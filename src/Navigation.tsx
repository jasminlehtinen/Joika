import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icon library
import Home from './Home';

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
                            <Ionicons name='home' size={32} color='black' />
                        ),
                    }}
                />
                <Tab.Screen
                    name="map"
                    component={MapPlaceholder}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='compass' size={32} color='black' />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
