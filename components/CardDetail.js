import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Kartu from './Card';

const CardDetail = (props) => {
    return (
        <Kartu>
            <Text>{props.Card.name}</Text>
        </Kartu>
    );
};

export default CardDetail;
