import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

const DiscoveryScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{color:'white'}} > DiscoveryScreen </Text>
        </SafeAreaView>
    )
}

export default DiscoveryScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue',
    }
})
