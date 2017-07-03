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
    Image,
    TouchableOpacity,
    Platform,
    WebView
} from 'react-native';

var Seller = React.createClass ({

    getInitialState(){
        return{
            // detailUrl:'https://i.meituan.com/?city=guangzhou'
            detailUrl:'https://i.meituan.com/?city=guangzhou'
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*navigation bar*/}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />

            </View>
        );
    },

    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity style={styles.navLeftViewStyle}
                                  onPress={()=>this.props.navigator.pop()}
                >
                    <Image source={{uri: 'icon_shop_local'}} style={styles.navImageStyle}/>
                </TouchableOpacity>

                <Text style={styles.navTitleStyle}>商家</Text>

                <TouchableOpacity style={styles.navRightViewStyle}
                                  onPress={()=>{alert('点了')}}
                >
                    <Image source={{uri: 'icon_shop_search'}} style={styles.navImageStyle}/>
                </TouchableOpacity>

            </View>
        )
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    navOutViewStyle:{
        height: Platform.OS === 'ios' ? 64 : 48,
        backgroundColor: 'rgba(255, 96, 0, 1.0)',

        // main axis direction
        flexDirection: 'row',
        // center vertical - cross-axis
        alignItems: 'flex-end',

        // set space
        justifyContent: 'space-around',

        // center horizontal - on main axist
        justifyContent:'center',

    },

    navTitleStyle:{
        color: 'white',
        fontSize: 16,
        marginBottom: 15,
        fontWeight: 'bold',


    },

    navLeftViewStyle:{
        // position
        position: 'absolute',
        left: 10,
        bottom: 10,
    },

    navRightViewStyle:{
        // position
        position: 'absolute',
        right: 10,
        bottom: 10,

    },

    navImageStyle:{ // image in navigation bar
        width: 25,
        height:25,
        marginRight: 10,
    },

});

module.exports = Seller;
