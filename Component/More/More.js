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
    ScrollView

} from 'react-native';

var CommonCell = require('./CommonCell');

var More = React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                {/*navigation bar*/}
                {this.renderNavBar()}

                {/*content*/}
                <ScrollView style={{flex: 1}}>
                    <View style={styles.cellStyle}>
                        <CommonCell
                            title='扫一扫'
                        />
                    </View>

                    <View style={styles.cellStyle}>
                        <CommonCell
                            title='省流量模式'
                            isSwitch={true}
                        />
                        <CommonCell
                            title='消息提醒'
                        />
                        <CommonCell
                            title='邀请好友使用码团'
                        />
                        <CommonCell
                            title='清空缓存'
                            rightTitle="1.98MB"
                        />
                    </View>


                    <View style={styles.cellStyle}>
                        <CommonCell
                            title='问卷调查'
                        />
                        <CommonCell
                            title='支付帮助'
                        />
                        <CommonCell
                            title='网络诊断'
                        />
                        <CommonCell
                            title='关于码团'
                        />
                        <CommonCell
                            title='我要应聘'
                        />
                    </View>

                    <View style={styles.cellStyle}>
                        <CommonCell
                            title='精品应用'
                        />
                    </View>
                </ScrollView>


            </View>
        );
    },


    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Image />
                <Text style={styles.navTitleStyle}>更多</Text>
                <TouchableOpacity style={styles.navRightViewStyle}
                    onPress={()=>{alert('点了')}}
                >
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>

            </View>
        )
    },

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',

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

    cellStyle:{
        marginTop: 15,

    },


});

module.exports = More;
