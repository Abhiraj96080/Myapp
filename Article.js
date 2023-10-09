import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Platform, Dimensions } from 'react-native';

const Article = () => (
    <View style={styles.container}>
        <ImageBackground source={require("./assets/mountain.jpg")} style={styles.image}>
        </ImageBackground>
        <View>
            <Text style={styles.text}>Trek the Road Not Taken: 5 Himalayan Treks to
                Unleash the Adventurer in You This Summer</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width

    },
    text: {
        color: '#f53692',
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold',
        textAlign: 'left',

    },
});

export default Article;