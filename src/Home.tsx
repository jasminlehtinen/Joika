import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 0.4,
        width: '70%',
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
            <View
                style={styles.container}
            >
                {/* Joika logo */}
                <Image
                    source={require('../assets/joika_logo_green.png')}
                    style={{ width: 200, height: 80 }}
                />
                {/* Navigation */}
                <Text>Avaa kartta</Text>
                <Text>Vaihda teema</Text>
                <Text>Tietokirja</Text>
            </View>
        </ImageBackground>
    );
};

export default Home;
