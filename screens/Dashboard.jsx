import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native';
import ProjectCard from './components/ProjectCard';
import Explore from './Explore';
import Home from './Home';

const Dashboard = () => {
    const screenwidth = Dimensions.get('window').width;


    return (
        <View style={styles.container}>

            <Home />

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

export default Dashboard;
