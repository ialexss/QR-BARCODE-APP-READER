import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Contiene: ${`${data}`}`);
    };

    if (hasPermission === null){
        return <Text>Esperando por los permisos para la camara</Text>
    }
    if (hasPermission === false){
        return <Text>No tenemos permisos para usar la camara</Text>
    }

    return (
        <View style={styles.container}>

                <BarCodeScanner 
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style = {StyleSheet.absoluteFillObject}
                />

            {scanned && <Button title='Presiona para escanear nuevamente' onPress={() => setScanned(false)} />}
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#1E1E1E'
    }
})