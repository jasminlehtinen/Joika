import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'; // Icon library

import Home from './Home';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='home-sharp' size={32} color='black' />
                        ),
                    }}
                />
                {/* More screens here */}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
