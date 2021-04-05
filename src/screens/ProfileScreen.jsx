import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{color:'white'}} > ProfileScreen </Text>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
        container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue',
    }
})
