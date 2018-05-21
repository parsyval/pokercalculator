import React, {Component} from 'react';
import './Card.css';

class Card extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {card} = this.props;
    return card ? (
      <div className="card">
        <img src={card.image} alt={card.code}/>
      </div>
    ) : (
    <div>No card selected</div>
    );
  }
}

export default Card;

