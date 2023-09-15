import React from 'react';
import {Text, View} from 'react-native';

export default function AboutMe(){
    return(
        <View style ={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Anjali Thapa Magar</Text>
            <Text>ID#: 301372527</Text>
        </View>
    );
}