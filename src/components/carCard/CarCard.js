import React, { Component } from 'react';
import './CarCard.css';


class CarCard extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props.car);

    return (
      <div className="Card">
      
        <div className="header">
          <div className="image" style={{backgroundImage: 'url('+this.props.car.imageUrl+')'}}>
            <span className="text">ver detalhes</span>
          </div>
        </div>

      </div>
    );
  }
}

export default CarCard;