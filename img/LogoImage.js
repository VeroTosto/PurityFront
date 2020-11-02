import React, { Component } from 'react'
import { Image } from 'react-native'

const LogoImage = () => (
   <Image source = {require('./../assets/logo.png')} style={{alignSelf: 'center'}}/>
)
export default LogoImage