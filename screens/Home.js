import { View, Pressable, StyleSheet,Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Pressable style={{backgroundColor:'#e1f7a9', padding:25, borderRadius:25,color:'white'}} title='ESCANEAR' onPress={()=> navigation.navigate('Scanner')}>
                <Text style={{color:'#171717'}}>ESCANEAR</Text>
            </Pressable>
            <StatusBar light />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#1E1E1E',
        alignItems:'center',
        justifyContent:'center'
    }
})
