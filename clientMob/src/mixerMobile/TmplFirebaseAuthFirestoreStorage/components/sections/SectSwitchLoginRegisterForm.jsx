import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useUserStore } from '../../store/user.store';

export default function SectSwitchLoginRegisterForm({ textMessage, textLink, link}) {
    const navigation = useNavigation()
    const setUser_email = useUserStore(state => state.setUser_email);
    const setUser_password = useUserStore(state => state.setUser_password);

    const handlePress = () => {
        setUser_email('')
        setUser_password('')
        navigation.navigate(link);
    }
    return (
        <View style={styles.loginContainer}>
            <Text>{textMessage}</Text>
            <TouchableOpacity onPress={handlePress}>
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