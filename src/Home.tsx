import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';

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
});

const Home = () => {
    const { width, height } = Dimensions.get('window') // Using Dimensions API to get the screen dimensions

    return (
        <ImageBackground
            source={require('../assets/background_image.jpg')} // Background image
            resizeMode='cover' // Covers the screen
            style={styles.background, { width, height }}
        >
            <View style={styles.container}>
                <View style={styles.containerContent}>
                    {/* Joika logo */}
                    <Image
                        source={require('../assets/joika_logo_green.png')}
                        style={{ width: 200, height: 80 }}
                    />
                    <View>
                        {/* Navigation */}
                        <Text style={styles.containerText}>Avaa kartta</Text>
                        <Text style={styles.containerText}>Vaihda teema</Text>
                        <Text style={styles.containerText}>Tietokirja</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Home;
