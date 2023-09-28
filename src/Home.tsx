import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

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
            source={require('../assets/background_image.jpg')}
            resizeModel='cover'
            style={styles.background, { width, height }}
        >
            <View
                style={styles.container}
            >
                {/* Joika logo */}
                <Text>Logo</Text>
                {/* Navigation */}
                <Text>Navigation 1</Text>
                <Text>Navigation 2</Text>
                <Text>Navigation 3</Text>
            </View>
        </ImageBackground>
    );
};

export default Home;
