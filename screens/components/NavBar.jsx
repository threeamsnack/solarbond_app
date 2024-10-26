import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native';
import ProjectCard from './components/ProjectCard';
import Explore from './Explore';
import Home from './Home';

const NavBar = () => {
    const screenwidth = Dimensions.get('window').width;


    return (
        <View style={{
            flexDirection: 'row', gap: 60, backgroundColor: '#dcfee3',
            width: screenwidth, justifyContent: 'space-evenly', height: 80,
            alignItems: 'center', bottom: 0, position: 'absolute',
            borderTopRightRadius: 20, borderTopLeftRadius: 20, zIndex: 999
        }}>
            <View style={{ alignItems: 'center', marginLeft: 20 }}>
                <Image style={styles.logo} source={require('../assets/home.png')} />
                <Text style={{ color: '#000000', fontSize: 13 }}>Home</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.logo} source={require('../assets/direction.png')} />
                <Text style={{ color: '#000000', fontSize: 13 }}>Explore</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.logo} source={require('../assets/briefcase.png')} />
                <Text style={{ color: '#000000', fontSize: 13 }}>Portfolio</Text>
            </View>
            <View style={{ alignItems: 'center', marginLeft: -15, marginRight: 10 }}>
                <Image style={styles.logo} source={require('../assets/customer-service.png')} />
                <Text style={{ color: '#000000', fontSize: 13 }}>Contact Us</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6f6',
    },

});

export default NavBar;
