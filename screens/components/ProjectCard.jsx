import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProjectCard = ({
    projectname,
    city,
    organisation,
    unit,
    year
}) => {
    return (
        <View style={{ width: 350, height: 330, backgroundColor: '#80aa7d', borderRadius: 10, marginTop: 70 }}>
            <Image
                source={require('./solar-bg.png')}
                style={{ width: 'inherit', height: 100, borderRadius: 10 }}
            />
            <Text style={{ color: '#484444', marginTop: -68, marginLeft: 20, fontSize: 25, fontFamily: 'Montserrat-BoldItalic' }}>
                {projectname}
            </Text>
            <Text style={{ color: '#fff', marginTop: -20, marginLeft: 240, marginRight: 10, fontSize: 13, fontFamily: 'Montserrat-Regular', backgroundColor: '#109ba0', borderRadius: 3, textAlign: 'center', padding: 1 }}>
                {city}
            </Text>
            <Text style={{ marginTop: 10, marginLeft: 20, fontFamily: 'Montserrat-Medium', color: 'rgb(0, 0, 0)' }}>
                • Installed by: <Text>{organisation}</Text>
            </Text>

            <View style={{ width: 320, height: 100, backgroundColor: '#aad3ba', alignSelf: 'center', marginTop: 20, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 350, marginLeft: -10, marginTop: 10 }}>
                    <View style={{ marginTop: 6 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat-Medium' }}>Capacity</Text>
                        <Text style={{ textAlign: 'center' }}>---------</Text>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Montserrat-Bold' }}>{unit} KW</Text>
                    </View>
                    <View style={{ marginTop: 6 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat-Medium' }}>Operational till</Text>
                        <Text style={{ textAlign: 'center' }}>---------</Text>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Montserrat-Bold' }}>{year}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: 350, gap: 13, marginLeft: -6.5, marginTop: 29 }}>
                    <Text style={{ width: 150, backgroundColor: '#ffffff', textAlign: 'center', borderRadius: 10, height: 39, paddingTop: 9, fontFamily: 'Montserrat-Medium', fontSize: 15, marginLeft: 10 }}>Invest</Text>
                    <Text style={{ width: 150, backgroundColor: '#fff', textAlign: 'center', borderRadius: 10, height: 39, paddingTop: 9, fontFamily: 'Montserrat-Medium', fontSize: 15 }}>Group Invest</Text>
                </View>
                <View style={{width: 310, alignSelf: 'center', height: 20, backgroundColor: '#fff', marginTop: 10, borderRadius: 10,height: 40, alignItems: 'center' }}><Text style={{alignContent: 'center', marginTop: 10, textAlign: 'center', fontFamily: 'Montserrat-Medium'}}>Predicted Savings                                <Text style={{color: 'green'}}>12.1%</Text></Text></View>
            </View>
        </View>
    );
};

export default ProjectCard;
