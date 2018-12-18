import React, { Component } from 'react';
import './CarCard.css';


class CarCard extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

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
            <div className="bar-v"></div>
            <div className="col">
              <span className="text">ULTIMA OFERTA</span>
              <span className="number green">R$</span>
            </div>
          </div>

          <div className="bar-h"></div>
          
          <div className="row">
            <span className="text-bold-center">
              {this.props.car.make} {this.props.car.model} {this.props.car.version} {this.props.car.year}
            </span>
          </div>

          <div className="bar-h pb-5"></div>

          <div className="row pb-5">
            <div className="col">
              <span className="text big">{this.props.car.year}</span>
            </div>
            <div className="bar-v"></div>
            <div className="col">
              <span className="text big">{this.props.car.km} KM</span>
            </div>
          </div>

          <div className="bar-h"></div>

        </div>

        

        <div className="footer">
          <button type="btn" className="button button-green">FAZER OFERTA</button>
        </div>

      </div>
    );
  }
}

export default CarCard;