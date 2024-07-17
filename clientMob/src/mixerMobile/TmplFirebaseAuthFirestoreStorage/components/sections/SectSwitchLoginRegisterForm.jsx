import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SectSwitchLoginRegisterForm({ textMessage, textLink, link}) {
    const navigation = useNavigation()
    
    return (
        <View style={styles.loginContainer}>
            <Text>{textMessage}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(link)}>
                <Text>{textLink}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
    }
})