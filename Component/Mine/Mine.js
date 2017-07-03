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

var CommonMineCell = require('./CommonMineCell');
var MineMiddleView = require('./MineMiddleView');
var MineHeaderView = require('./MineHeaderView');

var Mine = React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                {/*navigation bar*/}
                {/*{this.renderNavBar()}*/}

                {/*content*/}
                <ScrollView style={{flex: 1}}
                    contentInset={{top: -200}}
                            contentOffset={{y: 200}}
                >
                    <MineHeaderView/>
                    <View style={styles.cellStyle}>
                        <CommonMineCell
                            title='我的订单'
                            imageName='collect'
                            rightTitle='查看全部订单'
                        />

                        <MineMiddleView />
                    </View>

                    <View style={styles.cellStyle}>
                        <CommonMineCell
                            title='小码哥钱包'
                            imageName='draft'
                            rightTitle='账号余额：￥100'
                        />
                        <CommonMineCell
                            title='抵用券'
                            imageName='like'
                            rightTitle='10张'
                        />
                    </View>


                    <View style={styles.cellStyle}>
                        <CommonMineCell
                            title='积分商城'
                            imageName='card'
                        />
                    </View>

                    <View style={styles.cellStyle}>
                        <CommonMineCell
                            title='今日推荐'
                            imageName='new_friend'
                            rightIcon='me_new'
                        />
                    </View>

                    <View style={styles.cellStyle}>
                        <CommonMineCell
                            title='我要合作'
                            imageName='pay'
                            rightTitle='轻松开店，招财进宝'
                        />
                    </View>
                </ScrollView>


            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',

    },

    cellStyle:{
        marginTop: 15,

    },


});

module.exports = Mine;
