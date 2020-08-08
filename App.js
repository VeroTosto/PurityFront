import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity, Animated, Text}  from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Footer, FooterTab, Button, Tab, Tabs, fontFamily} from 'native-base';
import { Col, Row} from 'react-native-easy-grid';
import LogoImage from './img/LogoImage';
import Cartas from './pantallas/Cartas';
import MyNav from './navigation';
import * as firebase from 'firebase';  
import "firebase/firestore";
import {decode, encode} from 'base-64';
import {firebaseConfig} from './Config';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
firebase.initializeApp(firebaseConfig);

  
export default class App extends React.Component {

  render() {
      return (
        <Container>
          <MyNav />
        </Container>
    );
  }
}

