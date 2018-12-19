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
    this.DecreaseRemainingTimeBySecond = this.DecreaseRemainingTimeBySecond.bind(this);
    this.MakeOffert = this.MakeOffert.bind(this);
  }

  componentDidMount() {
    this.CalculateAmount();
    this.interval = setInterval(() => this.DecreaseRemainingTimeBySecond(), 1000);
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
    bids.forEach((item) => {
      amount += Number(item.amount);
    });

    this.setState({ 
      amount: amount
    });
  }

  MilisecondsToHours(miliseconds) {
    let time = moment.duration(miliseconds, 'milliseconds'); 
    return time.hours()+ ":" + time.minutes() + ":" + time.seconds();
  }

  DecreaseRemainingTimeBySecond() {
    if (this.state.time > 0) this.setState({ time: moment.duration(this.state.time) - 1000 });
  }

  MakeOffert = () => this.setState({ amount: this.state.amount + 250 });

  NumberFormat = (number) => Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  render() {
    var time = this.props.car.remainingTime;

    if (this.state.time !== undefined) time = this.state.time;

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
              <span className="number green">R$ {this.NumberFormat(this.state.amount)}</span>
            </div>
          </div>

          <div className="bar-h"></div>
          
          <div className="row">
            <span className="text-bold-center">
              {this.props.car.make} {this.props.car.model} {this.props.car.version} {this.props.car.year}
            </span>
          </div>

          <div className="bar-h pb-5"></div>

          <div className="row">
            <div className="col">
              <span className="text big">{this.props.car.year}</span>
            </div>
            <div className="bar-v"></div>
            <div className="col">
              <span className="text big">{this.NumberFormat(this.props.car.km)} KM</span>
            </div>
          </div>

          <div className="bar-h"></div>

        </div>

        

        <div className="footer">
          <button type="btn" className="button button-green" disabled={(this.state.time === 0) ? true : false } onClick={() => this.MakeOffert()}>FAZER OFERTA</button>
        </div>

      </div>
    );
  }
}

export default CarCard;