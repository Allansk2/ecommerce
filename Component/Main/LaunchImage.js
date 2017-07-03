
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


/*import main*/
var Main = require('./Main');

var LaunchImage = React.createClass ({
    render() {
        return (
           // <Image source={{uri: 'launchimage'}} style={styles.launchImageStyle}/>

            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Show the launch image
                </Text>

            </View>
        );
    },

    componentDidMount(){
        setTimeout(()=>{
            // go to main
            this.props.navigator.replace({
                component: Main,  // route component
            });

        }, 2000);
    },

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    launchImageStyle:{
        flex: 1,

    }
});

module.exports = LaunchImage;
