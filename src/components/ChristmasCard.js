import React, { Component } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types'
=======
import PropTypes from 'prop-types';
>>>>>>> defaultProps  ChristmasCard
import './ChristmasCard.css';

class ChristmasCard extends Component {
  //https://codepen.io/laurenashpole/pen/zoMyQj
  render() {
      console.log(this.props)
    return (
        <div class="tags">

        <div class="tag-container">
            <div class="tag">
    
                <div class="tag-side tag-1-side">
                    <div class="tag-1-top"></div>
                    <div class="tag-text tag-1-text">
<<<<<<< HEAD
                    {this.props.cardOne}
=======
                        {this.props.cardOne}
>>>>>>> defaultProps  ChristmasCard
                        <div class="rule-shape rule-red">&#9733;</div>
                    </div>
                </div>
    
                <div class="tag-side tag-1-side is-back">
                    <div class="tag-1-top"></div>
                    <div class="tag-text tag-1-text">
                        {this.props.cardOneBack}
                        <div class="rule-shape">&#9733;</div>
                    </div>
                </div>
    
            </div>
        </div>
    
        <div class="tag-container">
            <div class="tag">
    
                <div class="tag-side tag-2-side">
                    <div class="tag-text tag-2-text">
<<<<<<< HEAD
                    {this.props.cardTwo}
=======
                        {this.props.cardTwo}
>>>>>>> defaultProps  ChristmasCard
                        <div class="rule-diagonal"></div>
                    </div>
                </div>
    
                <div class="tag-side tag-2-side is-back">
                    <div class="tag-text tag-2-text">
<<<<<<< HEAD
                    {this.props.cardTwoBack}
=======
                        {this.props.cardTwoBack}
>>>>>>> defaultProps  ChristmasCard
                        <div class="rule-diagonal"></div>
                    </div>
                </div>
    
            </div>
        </div>
    
        <div class="tag-container">
            <div class="tag">
    
                <div class="tag-side tag-3-side">
                    <div class="tag-text tag-3-text">
<<<<<<< HEAD
                    {this.props.cardThree}
=======
                        {this.props.cardThree}
>>>>>>> defaultProps  ChristmasCard
                        <div class="rule-shape">&#10052;</div>
                    </div>
                </div>
    
                <div class="tag-side tag-3-side is-back">
                    <div class="tag-text tag-3-text">
                        {`Terveisin, ${this.props.match.params.name}`}
                        <div class="rule-shape">&#10052;</div>
                    </div>
                </div>
    
            </div>
        </div>
    
    </div>
    );
  }
}
ChristmasCard.defaultProps = {
    cardOne: 'Hyvää joulua',
<<<<<<< HEAD
    cardOneBack: 'Ja hyvää uutta vuotta!',
    cardTwo: 'Iloista joulunaikaa',
    cardTwoBack: 'Toteutukoon kaikki toiveesi',
    cardThree: 'God Jul'
=======
    cardOneBack: 'ja mainiota uutta vuotta!',
    cardTwo: 'Suklaata ja glögiä',
    cardTwoBack: 'lahjoja ja parasta seuraa!',
    cardThree: 'Vietä ihanin joulu!', 
>>>>>>> defaultProps  ChristmasCard
}
export default ChristmasCard;
