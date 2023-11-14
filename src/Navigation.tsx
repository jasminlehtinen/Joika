import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icon library
import Home from './Home';
import TabBar from './TabBar'

const Tab = createBottomTabNavigator();

// Placeholder for Search component
const SearchPlaceholder = () => {
    return (
        <View>
            <Text>To be continued...</Text>
        </View>
    );
};

// Placeholder for Map component
const MapPlaceholder = () => (
    <></> // Empty fragment that doesn't render anything
);

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
                    options={{ tabBarLabel: 'Search', headerShown: false }}
                />
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{ tabBarLabel: 'Home', headerShown: false }}
                />
                <Tab.Screen
                    name="map"
                    component={MapPlaceholder}
                    options={{ tabBarLabel: 'Map', headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
