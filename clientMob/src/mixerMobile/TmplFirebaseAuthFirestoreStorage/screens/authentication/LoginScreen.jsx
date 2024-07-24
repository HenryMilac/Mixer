import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import FormLogin from '../../components/forms/FormLogin';
import SectSwitchLoginRegisterForm from '../../components/sections/SectSwitchLoginRegisterForm';


export default function LoginScreen() {
    return (
        <>
            <FormLogin/>
            <SectSwitchLoginRegisterForm textMessage={'No tienes cuenta?'} textLink={'Registrarse'} link={'Register'}/>
        </>
    );
}

const styles = StyleSheet.create({});