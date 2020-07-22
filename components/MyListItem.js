import React, { Component } from 'react';
import { ListItem, Left, Body, Text } from 'native-base';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default class MyListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ListItem icon noBorder>
                <Left>
                    <FontAwesomeIcon icon={faCircle} color={this.props.color}/>
                    <Text>{this.props.text}</Text>
                </Left>
            </ListItem>
        );
    }
}
