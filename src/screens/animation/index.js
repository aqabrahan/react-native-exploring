import React from 'react';
import { Text, ScrollView, View, SafeAreaView } from 'react-native';
import Simple from './components/simple';
import SimpleEasing from './components/easing';
import SimpleSpring from './components/spring';
import SimpleComposition from './components/composition';
import SimpleCompositionParallel from './components/compositionParallel';
import Mix from './components/compositionMix';
import Stagger from './components/stagger';

const AnimationScreen = () => {    
    return (
        <SafeAreaView>
            <ScrollView>
                <View  style={{height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Animation...</Text>
                    <Stagger />
                    <Mix />
                    <SimpleCompositionParallel />
                    <SimpleComposition />
                    <Simple />
                    <SimpleEasing />
                    <SimpleSpring />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

AnimationScreen.propTypes = {};

export default AnimationScreen;