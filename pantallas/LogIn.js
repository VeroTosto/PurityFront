import React from 'react';
import { Card, CardItem, Text, Row, Col, Input, Form, Item, Label, Content} from 'native-base';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LogoImage2 from '../img/LogoImage2';
import * as firebase from 'firebase';  

export default class LogIn extends React.Component {

    constructor(props){
        super (props)
            this.state = ({
              email:'',
              password:'',
            })
        }
    
    SingIn = (email, password) =>{
    
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user){
            firebase.auth().onAuthStateChanged(function(user){
            if (user){
                
                if (!user.emailVerified)
                {
                Alert.alert('Verifique su cuenta, si no lo hace no podra iniciar sesion')
                console.log("Verifique su  cuenta")
                firebase.auth().signOut();
                }
                else
                {
                console.log(user)
                console.log("ha iniciado sesion")
                console.log("mostrar navigation:", this.props)
                this.props.navigation.navigate('Home');
                Alert.alert ("Se ha iniciado sesion"); 
                
                firebase.firestore().collection("usuarios").doc(user.uid).update({
                    verificacion: true
                })
                }
            }
            }.bind(this))
        }.bind(this))
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Contraseña incorrecta');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        });


}
      
    render() {
        return (
            <Col style= {{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Row>
                <LogoImage2 />
            </Row>
            <Row style= {{width: '100%', marginBottom: 150}}>
                <Form style = {{alignItems: 'center', width:'100%'}}>
                    <Item regular style = {styles.txtInput}>
                        <Input 
                            placeholder="Email"
                            onChangeText={email => this.setState({ email })}/>
                    </Item>
                    <Item regular style = {styles.txtInput}>
                        <Input 
                            secureTextEntry = {true} 
                            underline = {false} 
                            placeholder="Contraseña"
                            onChangeText={password => this.setState({ password })}/>
                    </Item>
                    <Item style= {{marginTop: 10}}>
                        <TouchableOpacity 
                            style = {styles.btnLogIn} 
                            onPress={() => {this.SingIn(this.state.email, this.state.password); }}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Iniciar sesion</Text>
                        </TouchableOpacity>
                    </Item>
                    <Item style= {{marginTop: 10}}>
                        <TouchableOpacity 
                            style= {{backgroundColor: '#FFFFFF',}} 
                            onPress={() => this.props.navigation.navigate('SignUp')}>  
                                <Text style={{textDecorationLine: 'underline', fontSize: 15, color: 'black'}}>Crear cuenta</Text>
                        </TouchableOpacity>
                    </Item>
                </Form>
            </Row>
            </Col>
        )
    }
}

const styles = StyleSheet.create({
    txtInput: {
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        width: '70%',
        shadowColor: "#000", 
        shadowOffset: {width: 0, height: 2,}, 
        shadowOpacity: 0.23, 
        shadowRadius: 2.62, 
        elevation: 4
    },
    btnLogIn: {
        borderRadius: 10,
        backgroundColor: '#00B18F',
        paddingHorizontal: 40,
        paddingVertical: 10
    }
});