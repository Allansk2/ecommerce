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
            isSwitch: false,  // if it's switch
            rightTitle: ''

        }
    },

    getInitialState(){
        return{
            isOn: false
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('click cell')}}>
                <View style={styles.container}>
                    {/*left*/}
                    <Text style={styles.titleStyle}>{this.props.title}</Text>

                    {/*right image*/}
                    {this.renderRightView()}

                </View>
            </TouchableOpacity>
        );
    },


    /*right view*/
    renderRightView(){
        if (this.props.isSwitch) {
            // return switch
            return(
                <Switch
                    value={this.state.isOn}
                    onValueChange={()=>{this.setState({isOn: !this.state.isOn})}}
                    style={styles.switchStyle}/>
            )
        }else {
            // return image
            return(
                <View style={styles.rightViewStyle}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={styles.rightImageStyle}/>
                </View>
            )
        }
    },

    rightTitle(){
        if (this.props.rightTitle.length > 0){
            return(
                <Text style={styles.rightTextStyle}>{this.props.rightTitle}</Text>
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

    rightImageStyle:{
        width: 8,
        height: 13,

        marginRight: 10,

    },

    switchStyle:{
        marginRight: 10,

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
