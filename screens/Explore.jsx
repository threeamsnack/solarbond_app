import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import ProjectCard from './components/ProjectCard'; 

const Explore = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const recommendedProjects = [
        {
            projectname: "Solar Project",
            city: "Mumbai",
            organisation: "EMMVEE",
            unit: 125,
            year: 2039,
        },
        {
            projectname: "Evocon",
            city: "New Delhi",
            organisation: "Premier Energies",
            unit: 147,
            year: 2037,
        },
    ];

    const trendingProjects = [
        {
            projectname: "Lumenbond",
            city: "New Delhi",
            organisation: "Adani Power",
            unit: 110,
            year: 2038,
        },
        {
            projectname: "EcoSunrise",
            city: "Surat",
            organisation: "Hero Future Energies",
            unit: 30,
            year: 2039,
        },
        {
            projectname: "Helios Network",
            city: "Visakhapatnam",
            organisation: "Torrent Power",
            unit: 5,
            year: 2040,
        },
        {
            projectname: "SunScape",
            city: "Nagpur",
            organisation: "BHEL",
            unit: 70,
            year: 2036,
        },
    ];

    const filteredRecommended = recommendedProjects.filter(project =>
        project.projectname.toLowerCase().includes(inputValue.toLowerCase())
    );

    const filteredTrending = trendingProjects.filter(project =>
        project.projectname.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search Solar Projects"
                value={inputValue}
                onChangeText={handleInputChange}
                keyboardType="default"
                style={styles.input}
            />

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }}>
                {inputValue.length === 0 && (
                    <>
                        <Text style={{ marginLeft: 5, marginTop: 20, marginBottom: -15 }}>Recommended Projects</Text>
                        {filteredRecommended.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}

                        <Text style={{ marginLeft: 5, marginTop: 30, marginBottom: -15 }}>#1 Trending in Your Region</Text>

                        <View style={{ width: 350, height: 1, backgroundColor: '#9e9b9b', marginTop: 30 }}></View>
                    </>
                )}

                {/* Display filtered recommended or trending projects based on input value */}
                {filteredRecommended.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}

                {filteredTrending.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}

                {filteredRecommended.length === 0 && filteredTrending.length === 0 && inputValue.length > 0 && (
                    <Text style={{ marginLeft: 5, marginTop: 20 }}>No projects found</Text>
                )}
            </ScrollView>
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
    input: {
        width: 350,
        height: 55,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ccc9c9',
        marginTop: 30,
        fontFamily: 'Montserrat-Regular',
    },
});

export default Explore;
