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
    Platform,       // check current platform
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';



//import component
import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/Home');
var Seller = require('../Seller/Seller');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

var Main = React.createClass ({

    // get initial state
    getInitialState(){
      return{
          selectedTab: 'home'  //set home by default
      }
    },

    render() {
        return (
             <TabNavigator>
                 {/*setup navigation bar*/}

                 {/*Home*/}
                 {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', '首页', Home, '5')}

                 {/*Seller*/}
                 {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'seller', '商家', Seller)}

                 {/*Mine*/}
                 {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', '我的', Mine)}

                 {/*More*/}
                 {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', '更多', More)}


                 {/*<TabNavigator.Item*/}
                     {/*title="商家"*/}
                     {/*renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle} />}  //default icon*/}
                     {/*renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.iconStyle} />}   //selected icon*/}
                     {/*onPress={()=>{this.setState({selectedTab: 'seller'})}}*/}
                     {/*selected={this.state.selectedTab === 'seller'}*/}
                 {/*>*/}
                     {/*<Seller/>*/}
                 {/*</TabNavigator.Item>*/}

                 {/*/!*Mine*!/*/}
                 {/*<TabNavigator.Item*/}
                     {/*title="我的"*/}
                     {/*renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle} />}  //default icon*/}
                     {/*renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.iconStyle} />}   //selected icon*/}
                     {/*onPress={()=>{this.setState({selectedTab: 'mine'})}}*/}
                     {/*selected={this.state.selectedTab === 'mine'}*/}
                 {/*>*/}
                     {/*<Mine/>*/}
                 {/*</TabNavigator.Item>*/}


                 {/*/!*More*!/*/}
                 {/*<TabNavigator.Item*/}
                     {/*title="更多"*/}
                     {/*renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle} />}  //default icon*/}
                     {/*renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.iconStyle} />}   //selected icon*/}
                     {/*onPress={()=>{this.setState({selectedTab: 'more'})}}*/}
                     {/*selected={this.state.selectedTab === 'more'}*/}
                 {/*>*/}
                     {/*<More/>*/}
                 {/*</TabNavigator.Item>*/}

             </TabNavigator>
        );
    },

    renderTabBarItem(title, defaultIcon, selectedIcon, selectedTab, componentName, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{uri: defaultIcon}} style={styles.iconStyle} />}  //default icon
                renderSelectedIcon={() => <Image source={{uri: selectedIcon}} style={styles.iconStyle} />}   //selected icon
                onPress={()=>{this.setState({selectedTab: selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText= {badgeText}

            >
                <NavigationExperimental.Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                        return NavigationExperimental.Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />

            </TabNavigator.Item>
        )
    },


});

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,

    },

    selectedTitleStyle:{
        color: 'orange',


    },


});

module.exports = Main;
