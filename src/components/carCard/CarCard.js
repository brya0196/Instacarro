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

        <div className="body">
          <div className="row">
            <div className="col">
              <span className="text">TEMPO RESTANTE</span>
              <span className="number red">{this.props.car.remainingTime}</span>
            </div>
            <div className="col">
              <span className="text">ULTIMA OFERTA</span>
              <span className="number red">R$</span>
            </div>
          </div>
          
          <div className="row">
            {this.props.car.make} {this.props.car.model} {this.props.car.version} {this.props.car.year}
          </div>

          <div className="row">
            <div className="col">
              <span className="text">{this.props.car.year}</span>
            </div>
            <div className="col">
              <span className="text">{this.props.car.km} KM</span>
            </div>
          </div>
        </div>

        <div className="footer">
          <button type="btn" className="button button-green">FAZER OFERTA</button>
        </div>

      </div>
    );
  }
}

export default CarCard;