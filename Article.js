import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Platform, Dimensions } from 'react-native';

const Article = () => (
    <View style={styles.container}>
        <ImageBackground source={require("./assets/logo.jpg")} style={styles.image}>
            <Text style={styles.text}>Hello Abhiraj</Text>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width:'100%',
        // height:'100%'
        // borderWidth:5
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      alignItems:'center',
        resizeMode:'cover',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
        
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});

export default Article;