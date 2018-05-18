import React, {Component} from 'react';
import './Card.css';

class Card extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {card} = this.props;
    return (
      <div className="card">
        <img src={card.image}/>
      </div>
    );
  }
}

export default Card;

