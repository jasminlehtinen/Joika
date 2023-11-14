import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerContent: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '70%',
    },
    containerText: {
        paddingVertical: 7,
        fontSize: 20,
    },
    textDecoration: {
        fontWeight: 'bold',
        color: 'rgba(47, 101, 125, 1)'
    },
});

const Home = ({ navigation }) => {
    const { width, height } = Dimensions.get('window') // Using Dimensions API to get the screen dimensions

    const navigateToMap = () => {
        navigation.navigate('MapScreen') // Map added later
    };

    const navigateToTheme = () => {
        navigation.navigate('ThemeScreen') // Theme added later
    };

    return (
        <ImageBackground
            source={require('../assets/background_image_blue.jpg')} // Background image
            resizeMode='cover' // Covers the screen
            style={styles.background, { width, height }}
        >
            <View style={styles.container}>
                <View style={styles.containerContent}>
                    {/* Joika logo */}
                    <Image
                        source={require('../assets/joika_logo_blue.png')}
                        style={{ width: 200, height: 80 }}
                    />
                    <View>
                        <TouchableOpacity onPress={navigateToMap}>
                            <Text style={styles.containerText}>
                                <Text style={styles.textDecoration}>Avaa</Text> kartta
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={navigateToTheme}>
                            <Text style={styles.containerText}>
                                <Text style={styles.textDecoration}>Vaihda</Text> teema
                            </Text>
                        </TouchableOpacity>
                        { /* Add navigation? */ }
                        <Text style={styles.containerText}>
                            <Text style={styles.textDecoration}>Tietokirja</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Home;
