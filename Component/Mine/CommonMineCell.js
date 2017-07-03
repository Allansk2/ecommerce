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
    Switch
} from 'react-native';

var CommonCell = React.createClass ({

    getDefaultProps(){
        return{
            title: '',    //text
            imageName: '',
            rightTitle: '',
            rightIcon: ''
        }
    },

    getInitialState(){
        return{
            isOn: false
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('click mine cell')}}>
                <View style={styles.container}>
                    {/*left view*/}
                    {this.renderLeftView()}

                    {/*right view*/}
                    {this.renderRightView()}

                </View>
            </TouchableOpacity>
        );
    },


    /*left view*/
    renderLeftView(){
        return(
            <View style={styles.leftViewStyle}>
                <Image source={{uri: this.props.imageName}} style={styles.leftImageStyle}/>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
            </View>
        )

    },


    /*right view*/
    renderRightView(){
        return(
            <View style={styles.rightViewStyle}>
                {this.rightTitle()}
                {this.rightIcon()}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={styles.rightImageStyle}/>
            </View>
        )
    },

    rightTitle(){
        if (this.props.rightTitle.length > 0){
            return(
                <Text style={styles.rightTextStyle}>{this.props.rightTitle}</Text>
            )
        }
    },


    rightIcon(){
        if (this.props.rightIcon.length > 0){
            return(
                <Image source={{uri: this.props.rightIcon}} style={styles.rightIconStyle}/>
            )
        }
    },

});

const styles = StyleSheet.create({
    container:{
        height: 44,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,

        flexDirection: 'row',

        // main axist alignment
        justifyContent: 'space-between',

        alignItems: 'center',


    },


    titleStyle:{
        marginLeft: 10,


    },

    leftImageStyle:{
        width: 30,
        height: 30,

        marginLeft: 10,
        borderRadius: 15
    },

    rightImageStyle:{
        width: 8,
        height: 13,

        marginRight: 10,

    },

    rightIconStyle:{
        width: 24,
        height: 13,

        marginRight: 10,
    },

    leftViewStyle:{
        flexDirection: 'row',
        alignItems: 'center',


    },

    rightViewStyle:{
        flexDirection: 'row',
        alignItems: 'center',


    },

    rightTextStyle:{
        color: 'gray',
        marginRight: 5,


    }



});

module.exports = CommonCell;
