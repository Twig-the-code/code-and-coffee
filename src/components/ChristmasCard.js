import React, { Component } from 'react';
import './ChristmasCard.css';
class App extends Component {
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
                        Merry<br />Christmas
                        <div class="rule-shape rule-red">&#9733;</div>
                    </div>
                </div>
    
                <div class="tag-side tag-1-side is-back">
                    <div class="tag-1-top"></div>
                    <div class="tag-text tag-1-text">
                        And a happy New Year
                        <div class="rule-shape">&#9733;</div>
                    </div>
                </div>
    
            </div>
        </div>
    
        <div class="tag-container">
            <div class="tag">
    
                <div class="tag-side tag-2-side">
                    <div class="tag-text tag-2-text">
                        Happy<br />Holidays
                        <div class="rule-diagonal"></div>
                    </div>
                </div>
    
                <div class="tag-side tag-2-side is-back">
                    <div class="tag-text tag-2-text">
                        May your ev'ry wish come true
                        <div class="rule-diagonal"></div>
                    </div>
                </div>
    
            </div>
        </div>
    
        <div class="tag-container">
            <div class="tag">
    
                <div class="tag-side tag-3-side">
                    <div class="tag-text tag-3-text">
                        Feliz<br />Navidad
                        <div class="rule-shape">&#10052;</div>
                    </div>
                </div>
    
                <div class="tag-side tag-3-side is-back">
                    <div class="tag-text tag-3-text">
                        {`Terveisin ${this.props.match.params.name}`}
                        <div class="rule-shape">&#10052;</div>
                    </div>
                </div>
    
            </div>
        </div>
    
    </div>
    );
  }
}

export default App;
