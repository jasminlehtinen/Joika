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
                                route.name === 'search' ? 'search-outline' :
                                route.name === 'home' ? 'home-outline' :
                                route.name === 'map' ? 'compass-outline' : ''
                            }
                            size={32}
                            color={isFocused ? 'black' : 'gray'}
                        />
                        {/* Adds a black underline under the active tab's icon */}
                        {isFocused && (
                            <View
                                // Create separate StyleSheet later!
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '50%',
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
