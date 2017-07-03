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
  View
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

var LaunchImage = require('./Component/Main/LaunchImage');

export default class Shop extends Component {
    render() {
        return (

            <NavigationExperimental.Navigator
                initialRoute={{name:'launch',component:LaunchImage}}
                configureScene={()=>{
                    return NavigationExperimental.Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />


        );
    }
}


AppRegistry.registerComponent('Shop', () => Shop);

