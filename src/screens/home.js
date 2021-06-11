import React from 'react';
import { View, Text, Button } from 'react-native';
import I18n from '../i18n';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
  } from 'react-native';
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View style={{height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Home Screen</Text>
                    <Text>Translations</Text>
                    <Text>{I18n.t("hola")} --------i18n </Text>
                    <Text>{I18n.t("Are u ok?")} --------i18n </Text>

                    <Button title="Animation" onPress={() => navigation.navigate('Animation')} />
                    <Button title="Animate Scroll" onPress={() => navigation.navigate('AnimateScroll')} />
                    <Button title="Gesture" onPress={() => navigation.navigate('Gesture')} />
                    <Button title="FlexBox" onPress={() => navigation.navigate('FlexBox')} />
                </View>
            </ScrollView>      
        </SafeAreaView>
    );
};

Home.propTypes = {};

export default Home;