import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Home from './screens/Home';
import Explore from './screens/Explore';
import Portfolio from './screens/Portfolio';
import Contact from './screens/Contact';

const App = () => {
  const screenwidth = Dimensions.get('window').width;
  const [activeScreen, setActiveScreen] = useState('Home'); // Track active screen

  // Function to render the selected screen
  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home':
        return <Home />;
      case 'Explore':
        return <Explore />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderScreen()}

      <View style={styles.navBar}>
        <TouchableOpacity
          onPress={() => setActiveScreen('Home')}
          style={styles.navButton}>
          <Image style={styles.logo} source={require('./assets/home.png')} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveScreen('Explore')}
          style={styles.navButton}>
          <Image
            style={styles.logo}
            source={require('./assets/direction.png')}
          />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveScreen('Portfolio')}
          style={styles.navButton}>
          <Image
            style={styles.logo}
            source={require('./assets/briefcase.png')}
          />
          <Text style={styles.navText}>Portfolio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveScreen('Contact')}
          style={styles.navButton}>
          <Image
            style={styles.logo}
            source={require('./assets/customer-service.png')}
          />
          <Text style={styles.navText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f0f0',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'space-evenly',
    height: 80,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 999,
  },
  navButton: {
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  navText: {
    color: '#000000',
    fontSize: 13,
  },
});

export default App;
