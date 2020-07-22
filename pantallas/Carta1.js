import React, { Component } from 'react';
import { Card, CardItem, Text, Container, Row, Col} from 'native-base';
import MyListItem from './../components/MyListItem'
export default class ContSonora extends React.Component {
    render() {
        return (
            <Col style={{paddingVertical: 10}}>
            <Row style = {{alignSelf: 'center', height: 350}}>
                <Card style = {{width: '85%', borderRadius: 10}}>
                    <CardItem header style = {{alignSelf: 'center'}}>
                        <Text>Contaminacion Sonora</Text>
                    </CardItem>
                </Card>
            </Row>
            <Row style = {{alignSelf: 'center'}}>
                <Card style = {{width: '85%', borderRadius: 20, marginTop: 10, padding: 20, justifyContent: 'center'}}>
                    <Text style = {{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>Av. Congreso 245</Text>
                </Card>
            </Row>
            <Row style = {{alignSelf: 'center'}}>
                <Card style={{borderRadius: 10, width: '85%', height: 300}}>
                    <Row>
                        <Col style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                            <MyListItem color='#5DF163' text='Excelente'/>
                            <MyListItem color='#EEF06D' text='Moderada'/>
                            <MyListItem color='#E82929' text='Mala'/>
                        </Col>
                    </Row> 
                </Card>
            </Row>
            </Col>
        )
    }   
}
