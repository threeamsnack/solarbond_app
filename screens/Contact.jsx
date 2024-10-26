import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native';
import ProjectCard from './components/ProjectCard';
import Explore from './Explore';
import Home from './Home';

const Contact = () => {
    const screenwidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>

            <View style={{ position: 'absolute' }}>
                <Text style={{ fontSize: 30, textAlign: 'left', fontFamily: 'Montserrat-Regular', marginTop: -130 }}>Contact Us</Text>
                <TextInput style={{ width: 350, height: 55, borderWidth: 1, borderColor: '#000', padding: 10, borderRadius: 5, fontSize: 20, fontFamily: 'Montserrat-Regular', marginBottom: 12, marginTop: 20 }} placeholder="Name" />
                <TextInput style={{ width: 350, height: 55, borderWidth: 1, borderColor: '#000', padding: 10, borderRadius: 5, fontSize: 20, fontFamily: 'Montserrat-Regular', marginBottom: 12, marginTop: 20 }} placeholder="Email" />
                <TextInput style={{ width: 350, height: 55, borderWidth: 1, borderColor: '#000', padding: 10, borderRadius: 5, fontSize: 20, fontFamily: 'Montserrat-Regular', marginBottom: 12, marginTop: 20, height: 300 }} placeholder="Message" />
                <Text style={{ width: 350, marginTop: 10, paddingTop: 15, paddingBottom: 15, textAlign: 'center', fontFamily: 'Montserrat-Regular', color: '#fff', fontSize: 20, alignSelf: 'center', borderRadius: 5, backgroundColor: '#71a271' }}>Submit</Text>
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

export default Contact;
