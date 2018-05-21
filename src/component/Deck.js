import React, { Component } from 'react';
import './Deck.css';
import Card from './Card';
import { SELECT_CARD } from '../store/store-actions';

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: [],
    };
  }

  componentDidMount() {
    return fetch('https://deckofcardsapi.com/api/deck/new/')
      .then(response => response.json())
      .then(deck => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=52`)
          .then(response => response.json())
          .then(({ cards }) => {
            this.setState(state => {
              state.deck = cards;
            });
            this.forceUpdate();
          });
      });
  }

  selectCard = card => {
    this.props.onSelectCard({
      type: SELECT_CARD,
      payload: card,
    });
  };

  render() {
    const { deck } = this.state;
    return (
      <div className="deck">
        <ul>
          {deck.map((card, i) => (
            <li key={i} onClick={() => this.selectCard(card)}>
              <Card card={card} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Deck;
