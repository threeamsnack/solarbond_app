import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native';
import ProjectCard from './components/ProjectCard';
import Explore from './Explore';
import InvestedProject from './components/InvestedProject';
import { BarChart } from 'react-native-chart-kit';

const Home = () => {
    const screenwidth = Dimensions.get('window').width;
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                data: [20000, 15000, 48000, 12000, 8000, 30000],
            },
        ],
    };

    const chartConfig = {
        backgroundColor: "#0f1410",
        backgroundGradientFrom: "#707b73",
        backgroundGradientTo: "#6f8274",
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 5,
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
        },
    };

    return (
        <View style={styles.container}>

            <View style={{ width: screenwidth, height: 65, backgroundColor: '#fff', alignItems: 'center', flexDirection: 'row', borderEndEndRadius: 10, borderBottomLeftRadius: 10 }}>
                <Image style={{ width: 50, height: 55, marginLeft: 12, marginTop: 5 }} source={require('../assets/logowitext.png')} />
                <Text style={{ fontFamily: 'Montserrat-Medium', marginLeft: 10, fontSize: 18 }}>SOLARBOND</Text>
            </View>

            <ScrollView style={{ width: 380 }} showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'column', backgroundColor: '#82a08a', paddingTop: 25, paddingBottom: 25, width: 380, borderRadius: 10, position: 'absolute', top: 20, zIndex: 999 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: '#a7c5a3', marginLeft: 20 }} source={require('../assets/user.png')} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 20, marginLeft: 8, color: '#fff' }}>Dhruv Bansal</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 10 }}>
                                <Image style={styles.badgeicon} source={require('../assets/verify.png')} />
                                <Text style={styles.badge}>Solar Champ</Text>
                                <Image style={styles.badgeicon} source={require('../assets/verify.png')} />
                                <Text style={styles.badge}>Carbon Saver</Text>
                            </View>
                            <Image style={[styles.badgeicon, { marginBottom: -17, marginLeft: 5 }]} source={require('../assets/verify.png')} />
                            <Text style={[styles.badge, { marginLeft: 13 }]}>Loyal Investor</Text>
                        </View>
                    </View>

                    <View style={{ height: 2, width: 350, backgroundColor: '#b5b8b8', alignSelf: 'center', marginTop: 15 }}></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 350, marginTop: 10, alignSelf: 'center' }}>
                        <View style={{ marginTop: 6, }}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, fontFamily: 'Montserrat-Medium', marginBottom: 7 }}>Reduced CO₂</Text>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontFamily: 'Montserrat-Bold' }}>1.75 Tons</Text>
                        </View>
                        <View style={{ marginTop: 6 }}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, fontFamily: 'Montserrat-Medium', marginBottom: 7 }}>Energy Savings</Text>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontFamily: 'Montserrat-Bold' }}>₹41,220</Text>
                        </View>
                    </View>

                </View>

                <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 310, fontFamily: 'Montserrat-Regular' }}>Monthly Investment Analysis</Text>

                <BarChart
                    data={data}
                    width={screenwidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                    style={styles.chart}
                />

                <Text style={{ fontSize: 20, marginTop: 50, textAlign: 'center', fontFamily: 'Montserrat-Regular' }}>My Investments</Text>

                <View style={{ marginTop: 10, marginBottom: 200, alignSelf: 'center' }}>
                    <InvestedProject
                        projectname="HelioHub"
                        city="Mumbai"
                        organisation="Adani Green Energy"
                        funds="2,17,000"
                        savings={"32,400"}
                    />

                    <InvestedProject
                        projectname="EcoVolt"
                        city="Delhi"
                        organisation="Reliance Industries"
                        funds="9000"
                        savings={1560}
                    />

                    <InvestedProject
                        projectname="SunFusion"
                        city="Hyderabad"
                        organisation="JSW Energy"
                        funds="35,000"
                        savings={4600}
                    />

                    <InvestedProject
                        projectname="SolarWave"
                        city="Ahmedabad"
                        organisation="Adani Solar"
                        funds="15,000"
                        savings={2100}
                    />

                    <InvestedProject
                        projectname="SunScape"
                        city="Nagpur"
                        organisation="BHEL"
                        funds="5000"
                        savings={560}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        backgroundColor: 'rgb(219, 234, 221)',
        padding: 5,
        borderRadius: 50,
        margin: 5,
        textAlign: 'center',
        width: 100,
        color: '#000',
        fontSize: 10,
        fontFamily: 'Montserrat-Medium',
    },
    badgeicon: {
        width: 20,
        height: 20,
        marginRight: -17,
        marginTop: -3,
        zIndex: 1,
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
        marginTop: 40,
        alignSelf: 'center',
    },

});

export default Home;
