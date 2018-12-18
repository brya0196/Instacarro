import React, { Component } from 'react';
import moment from 'moment';
import './CarCard.css';


class CarCard extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      time: undefined
    }

    this.CalculateAmount = this.CalculateAmount.bind(this);
    this.MilisecondsToHours = this.MilisecondsToHours.bind(this);
    this.DecreaseBySecond = this.DecreaseBySecond.bind(this);
    this.MakeOffert = this.MakeOffert.bind(this);
  }

  componentDidMount() {
    this.CalculateAmount();
    this.interval = setInterval(() => this.DecreaseBySecond(), 1000);
    this.setState({ 
      time: this.props.car.remainingTime
    });
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  CalculateAmount() {
    let bids = this.props.car.bids;

    let amount = 0;
    bids.map((item) => {
      amount += Number(item.amount);
    });

    this.setState({ 
      amount: amount
    });
  }

  MilisecondsToHours(miliseconds) {
    let time = moment.duration(miliseconds, 'milliseconds');
    
    return time.hours() + ":" + time.minutes() + ":" + time.seconds();
  }

  DecreaseBySecond() {
    let time = 0;

    time = moment.duration(this.state.time) - 1000;

    this.setState({ time: time });
  }

  MakeOffert() {
    let amount = this.state.amount + 250;
  
    this.setState({ amount: amount });
  }

  render() {
    var time = this.props.car.remainingTime;

    if (this.state.time != undefined) time = this.state.time;

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
              <span className="number red">
                {this.MilisecondsToHours(time)}
              </span>
            </div>
            <div className="bar-v"></div>
            <div className="col">
              <span className="text">ULTIMA OFERTA</span>
              <span className="number green">R$ {this.state.amount}</span>
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
          <button type="btn" className="button button-green" onClick={() => this.MakeOffert()}>FAZER OFERTA</button>
        </div>

      </div>
    );
  }
}

export default CarCard;