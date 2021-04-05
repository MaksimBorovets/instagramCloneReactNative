import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

const NotificationScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{color:'white'}} > NotificationScreen </Text>
        </SafeAreaView>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
        container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue',
    }
})
