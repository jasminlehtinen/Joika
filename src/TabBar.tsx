import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icon library

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        // Contains the entire tab bar
        <View
            // Create separate StyleSheet later!
            style={{ flexDirection: 'row', backgroundColor: 'white' }}
        >
            {/* Loops through each possible route available */}
            {state.routes.map((route, index) => {
                // Boolean variable indicating whether the current tab is focused
                const isFocused = state.index === index;

                // Function executed when a tab is pressed
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress', // type of event being emitted
                        target: route.key, // target of the event
                        canPreventDefault: true, // event can be prevented
                    });

                    // Checks whether the tab press should lead to navigation or not
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button" // sets the role to button
                        accessibilityState={isFocused ? { selected: true } : {}} // sets the state, whether focused or not
                        accessibilityLabel={route.name} // sets the label (name)
                        onPress={onPress} // triggers onPress function
                        // Create separate StyleSheet later!
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Ionicons
                            name={
                                route.name === 'search' ? 'ios-search' :
                                route.name === 'home' ? 'ios-home' :
                                route.name === 'map' ? 'ios-map' : 'ios-home-outline'
                            }
                            size={32}
                            color={isFocused ? 'black' : 'gray'}
                        />
                        {isFocused && (
                            <View
                                // Create separate StyleSheet later!
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                    height: 3,
                                    backgroundColor: 'black',
                                }}
                            />
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar;
