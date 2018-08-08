import React, { Component } from 'react'
import axios from 'axios'
import { View } from 'react-native'

import CardDetail from './CardDetail';

export default class CardList extends Component {
    state = {
        cards: []
    }
    componentWillMount(){
        axios.get('https://api.pokemontcg.io/v1/cards?subtype=Legend')
        .then(response => this.setState({ cards: response.data }));
    }

    renderCards(){
            return this.state.cards.map(card => < CardDetail key={card.nationalPokedexNumber} card={card} />
        );
    }
    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        )
    }
}
