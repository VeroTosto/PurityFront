import React from 'react'
import { Card, CardItem, Row, Col, Input, Form, Item, Label, Content, Header, Body} from 'native-base';
import {Button, Text} from 'react-native';
import { StyleSheet, TouchableOpacity, Alert, View, Modal, ImageBackground } from 'react-native';
import LogoImage from '../img/LogoImage';
import { faUserCircle, faHouseUser, faChartBar, faLock, faSignOutAlt, faKey, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as firebase from 'firebase'; 

export default class User extends React.Component {
    constructor(props){
        super (props) 
        this.state = ({
          email: '',
          nombrecompleto:'',
          direccion:'',
          newPassword: '',
          nuevaDir:'',
          confirmarPassword: '',
          actualPassword: '',
          showModalChangePass: false,
          showModalChangeDir: false,
        })
    }

    componentDidMount() {
        this.DatosUsuario();
    }

    DatosUsuario = () =>{
    var user = firebase.auth().currentUser;
    var uid = user.uid; 
    var docRef = firebase.firestore().collection("usuarios").doc(uid);
    var email1;
    var nombre1;
    docRef.get().then(function(doc) {
        if (doc.exists){
        console.log(uid);
        email1 = doc.get("email");
        nombre1 = doc.get("nombre");
        this.setState({ email: email1 });
        this.setState({nombrecompleto: nombre1})
        console.log("Document data:", email1);
        console.log("Document data:", nombre1);
        }
        else{
        console.log("no existe documento"); 
        }
    }.bind(this))
    }

    ReAuth = (actualPassword) =>{
        var user = firebase.auth().currentUser;
        var credentials = firebase.auth.EmailAuthProvider.credential(user.email, actualPassword)
        return user.reauthenticateWithCredential(credentials);
    }

    ChangePassword = (newPassword, confirmarPassword) =>{

        this.ReAuth(this.state.actualPassword).then(() =>{
          
          var user = firebase.auth().currentUser;
          if (newPassword == confirmarPassword){
            user.updatePassword(newPassword).then(function() {
              Alert.alert ('Se ha cambiado la contraseña')
              console.log ('se ha cambiado la contraseña')
            })
            .catch(function(error) {
              console.error(error)
            })
          }
          else{
            Alert.alert("Las contraseñas no coinciden"); 
          }
      
        })
        .catch((error) => {
            Alert.alert('Error:', error.message)
        })
    }

    CambiarDireccion = (nuevaDir) =>{
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            firebase.firestore().collection("usuarios").doc(user.uid).update({
              direccion: nuevaDir
            })
            console.log("se ha cambiado la direccion")
            Alert.alert('Se ha cambiado la direccion')
          } else {
            
          }
        })
    }

    SingOut = ()=>{
        try {
          firebase.auth().signOut();
          console.log("se cerro sesion")
          Alert.alert ("Se ha cerrado la sesion")
        } 
        catch (error) {
          console.log(error.toString())
        }
    }

    render() {
        return (
            <>
            <Header style ={{backgroundColor: '#00B18F', height: 60}} >
                <Body>      
                    <LogoImage />
                </Body>
            </Header>
            <ImageBackground source= {require('../assets/PantallaUsuario4.jpg')} style={styles.backgroundimage}>
            <Content>
                <Modal visible={this.state.showModalChangePass} transparent={true} >
                    <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center'}}>
                        <View style={{backgroundColor: '#FFFFFF', margin: 20, padding: 20, borderRadius: 10}}>
                            <TouchableOpacity onPress={() => {this.setState({showModalChangePass: false})}}>
                                <FontAwesomeIcon icon={ faTimes } size={ 25 } style = {{color: '#817E7E', alignSelf: 'flex-end'}}/>
                            </TouchableOpacity>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Cambiar Contraseña</Text>
                            <Form style = {{alignItems: 'center', width:'100%'}}>
                                <Item underline style={{marginTop: 30}}>
                                    <Input placeholder="Contraseña Actual" onChangeText={ actualPassword => this.setState({ actualPassword })} />
                                </Item>
                                <Item underline style={{marginTop: 30}}>
                                    <Input placeholder="Contraseña Nueva" onChangeText={ newPassword => this.setState({ newPassword })} />
                                </Item>
                                <Item underline style={{marginTop: 20}}>
                                    <Input placeholder="Confirmar Contraseña" onChangeText={ confirmarPassword => this.setState({ confirmarPassword })}/>
                                </Item>
                                <Item style={{marginTop: 30}}>
                                    <TouchableOpacity style={styles.btn} onPress={() => this.ChangePassword(this.state.newPassword, this.state.confirmarPassword)}>
                                        <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Actualizar Contraseña</Text>
                                    </TouchableOpacity>
                                </Item>
                            </Form>
                        </View>
                    </View>
                </Modal>
                <Modal visible={this.state.showModalChangeDir} transparent={true} >
                    <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center'}}>
                        <View style={{backgroundColor: '#FFFFFF', margin: 20, padding: 20, borderRadius: 10}}>
                            <TouchableOpacity onPress={() => {this.setState({showModalChangeDir: false})}}>
                                <FontAwesomeIcon icon={ faTimes } size={ 25 } style = {{color: '#817E7E', alignSelf: 'flex-end'}}/>
                            </TouchableOpacity>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Cambiar Direccion</Text>
                            <Form style = {{alignItems: 'center', width:'100%'}}>
                                <Item underline style={{marginTop: 30}}>
                                    <Input placeholder="Nueva Direccion" onChangeText={ nuevaDir => this.setState({ nuevaDir })} />
                                </Item>
                                <Item style={{marginTop: 40}}>
                                    <TouchableOpacity style={styles.btn} onPress={() => this.CambiarDireccion(this.state.nuevaDir)}>
                                        <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Actualizar Direccion</Text>
                                    </TouchableOpacity>
                                </Item>
                            </Form>
                        </View>
                    </View>
                </Modal>
                <Col style={{marginTop: 30}}>
                    <Row style={{alignSelf: 'center'}}>
                        <Card style = {{width: '80%', borderRadius: 15, padding: 20, alignSelf: 'center', shadowOffset:{ width: 10,  height: 10 }, shadowColor: 'black', shadowOpacity: 1.0,}}>
                            <Row style={{justifyContent: 'center'}}>
                                <FontAwesomeIcon icon={ faUserCircle } size={ 70 } style = {{color: '#817E7E'}}/>
                            </Row>
                            <Row style={{justifyContent: 'center'}}>
                                <Text style= {{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 10}}>{this.state.nombrecompleto}</Text>
                            </Row>
                            <Row style={{justifyContent: 'center'}}>
                                <Text>{this.state.email}</Text>
                            </Row>
                        </Card>
                    </Row>
                    <Row style={{alignSelf: 'flex-start', marginLeft: 25, marginTop: 35, justifyContent: 'center'}}>
                        <View style = {styles.CircleShapeView}>
                            <FontAwesomeIcon icon={ faHouseUser } size= {25} style = {{color: '#F9F9F9'}} />
                        </View>
                        <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => {this.setState({showModalChangeDir: true})}}>
                            <Text style= {{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginLeft: 15}}> Cambiar Direccion</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={{alignSelf: 'flex-start', marginLeft: 25, marginTop: 35, justifyContent: 'center'}}>
                        <View style = {styles.CircleShapeView}>
                            <FontAwesomeIcon icon={ faLock } size= {23} style = {{color: '#F9F9F9'}} />
                        </View>
                        <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => {this.setState({showModalChangePass: true})}}>
                            <Text style= {{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginLeft: 15}}> Cambiar Contraseña</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={{alignSelf: 'flex-start', marginLeft: 25, marginTop: 35, justifyContent: 'center'}}>
                        <View style = {styles.CircleShapeView}>
                            <FontAwesomeIcon icon={ faSignOutAlt } size= {23} style = {{color: '#F9F9F9'}} />
                        </View>
                        <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => {this.SingOut(), this.props.navigation.navigate('LogIn')}}>
                            <Text style= {{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginLeft: 15}}> Cerrar Sesión</Text>
                        </TouchableOpacity>
                    </Row>
                </Col>
            </Content>
            </ImageBackground>
            </>
        )
    }
}

const styles = StyleSheet.create({
    CircleShapeView: {
        width: 40,
        height: 40,
        borderRadius: 150/2,
        backgroundColor: '#00B18F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtInput: {
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: "#000", 
        shadowOffset: {width: 0, height: 2,}, 
        shadowOpacity: 0.23, 
        shadowRadius: 2.62, 
        elevation: 4
    },
    btn: {
        borderRadius: 10,
        backgroundColor: '#00B18F',
        paddingHorizontal: 40,
        paddingVertical: 10
    },
    backgroundimage:{
        width : "100%",
        flex: 1
    }
})