import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const Article = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("./assets/mountain.jpg")} style={styles.image}>
            </ImageBackground>
            <View>
                <Text style={styles.text}>Trek the Road Not Taken: 5 Himalayan Treks to
                    Unleash the Adventurer in You This Summer</Text>
                
                <TouchableOpacity onPress={ 
                    console.log('Try Again')}>
                    <Text style={styles.read}>Read Article &rarr;</Text>
                </TouchableOpacity>
            


            </View>

        </View>


    );
};

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
        color: '#fcfbde',
        fontSize: 35,
        lineHeight: 56,
        fontWeight: 'bold',
        textAlign: 'left',
        margin: 10

    },
    read: {
        color: "white",
        fontSize: 25,
        marginHorizontal: 15,
        marginVertical: 15
    },

});

export default Article;