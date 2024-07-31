import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { useUserStore } from '../store/user.store';

const user_email = useUserStore.getState().user_email;

export function handleEdit() {
    console.log('eds')
    console.log(user_email)
}