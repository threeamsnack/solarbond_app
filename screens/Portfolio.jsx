import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native';
import ProjectCard from './components/ProjectCard';
import Explore from './Explore';
import Home from './Home';

const Portfolio = () => {
    const screenwidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>

            <View style={{ width: 370, height: 70, backgroundColor: '#82a08a', borderRadius: 10, flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 20 }}>
                <Image style={{ width: 40, height: 40, marginLeft: 10 }} source={require('../assets/wallet.png')} />
                <Text style={{ fontFamily: 'Montserrat-Bold', marginLeft: 10, fontSize: 18 }}>Balance</Text>
                <Text style={{ fontFamily: 'Montserrat-Medium', marginLeft: 10, fontSize: 18, color: '#e4e4e4', marginLeft: 140 }}>₹16,000</Text>
            </View>

            <Text style={{ fontSize: 22, marginLeft: 0, position: 'absolute', top: 120, left: 2, fontFamily: 'Montserrat-Medium' }}>Transactions</Text>


            <View style={{ marginTop: -100 }}>
                <View style={{ width: 370, marginBottom: 15, height: 50, backgroundColor: '#c6d9da', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat-Medium' }}>HelioHub</Text>
                    <Text style={{ marginRight: 10, fontSize: 15, fontFamily: 'Montserrat-Medium', color: 'green' }}>+ 32,400</Text>
                </View>

                <View style={{ width: 370, marginBottom: 15, height: 50, backgroundColor: '#c6d9da', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat-Medium' }}>SunFusion</Text>
                    <Text style={{ marginRight: 10, fontSize: 15, fontFamily: 'Montserrat-Medium', color: '#bf6060' }}>- 15,000</Text>
                </View>

                <View style={{ width: 370, marginBottom: 15, height: 50, backgroundColor: '#c6d9da', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat-Medium' }}>SolarWave</Text>
                    <Text style={{ marginRight: 10, fontSize: 15, fontFamily: 'Montserrat-Medium', color: 'green' }}>+ 4600</Text>
                </View>

                <View style={{ width: 370, marginBottom: 15, height: 50, backgroundColor: '#c6d9da', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat-Medium' }}>SunScope</Text>
                    <Text style={{ marginRight: 10, fontSize: 15, fontFamily: 'Montserrat-Medium', color: '#bf6060' }}>- 15,000</Text>
                </View>
                <View style={{ width: 370, marginBottom: 15, height: 50, backgroundColor: '#c6d9da', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat-Medium' }}>SunScope</Text>
                    <Text style={{ marginRight: 10, fontSize: 15, fontFamily: 'Montserrat-Medium', color: '#bf6060' }}>- 12,000</Text>
                </View>

                <View style={{ width: 370, marginBottom: 15, height: 50, backgroundColor: '#c6d9da', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat-Medium' }}>EcoVolt</Text>
                    <Text style={{ marginRight: 10, fontSize: 15, fontFamily: 'Montserrat-Medium', color: 'green' }}>+ 21,000</Text>
                </View>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f0f0',
    },

});

export default Portfolio;
