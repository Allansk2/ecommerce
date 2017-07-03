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
    TouchableOpacity
} from 'react-native';


var HomeTitleCommonCell = React.createClass ({

    getDefaultProps(){
        return {
            leftIcon:'',
            leftTitle:'',
            rightTitle:'',
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('click ' + this.props.leftTitle)}}>
                <View style={styles.container}>
                    {/*left view*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: this.props.leftIcon}} style={styles.leftImageStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>

                    {/*right view*/}
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.rightTextStyle}>{this.props.rightTitle}</Text>
                        <Image source={{uri: 'icon_cell_rightArrow'}} style={styles.rightImageStyle}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',

        // vertical center
        alignItems: 'center',

        // align
        justifyContent: 'space-between',

        // bottom border
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,

        backgroundColor: 'white',
    },

    leftViewStyle:{
        // main axist direction
        flexDirection: 'row',

        // vertical center
        alignItems: 'center',

        marginLeft: 10,
    },

    leftImageStyle:{
        width: 23,
        height: 23,
        marginRight: 5,
    },

    leftTitleStyle:{
        fontSize: 16,
    },

    rightViewStyle:{
        // main axist direction
        flexDirection: 'row',

        // vertical center
        alignItems: 'center',
    },

    rightTextStyle:{
        color: 'gray',
    },

    rightImageStyle:{
        width: 8,
        height: 13,

        marginLeft: 5,
        marginRight: 10,

    },


});

module.exports = HomeTitleCommonCell;
