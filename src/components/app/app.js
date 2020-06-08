import React from 'react';
import { connect } from 'react-redux';
import {
  onNumberClick,
  onOperatorClick,
  onDecimalClick,
  onClearClick,
  onEqualClick,
  onAdditiveInverseClick
} from '../../actions';
import './app.css';

const AppComponent = ({buffer, display, onNumberClick, onOperatorClick, onDecimalClick, onClearClick, onEqualClick, onAdditiveInverseClick}) => {

  const onButtonClick = (value) => {
    if (/\d/.test(value)) {
      onNumberClick(value);
    }
    if (value === '*' || value === '/' || value === '+' || value === '-') {
      onOperatorClick(value);
    }
    if (value === '.') {
      onDecimalClick();
    }
    if (value === 'AC') {
      onClearClick();
    }
    if (value === '=') {
      onEqualClick();
    }
    if (value === 'switch') {
      onAdditiveInverseClick();
    }
  };

  return (
    <div className="calculator">
    <div className="formula">{display}</div>
    <div className="output" id="display">{buffer}</div>
    <div id="buttons" onClick={e => onButtonClick(e.target.value)}>
      <button id="clear"     value="AC">AC</button>
      <button id="switch"    value="switch">+/-</button>
      <button id="divide"    value="/">/</button>
      <button id="multiply"  value="*">×</button>
      <button id="seven"     value="7">7</button>
      <button id="eight"     value="8">8</button>
      <button id="nine"      value="9">9</button>
      <button id="subtract"  value="-">-</button>
      <button id="four"      value="4">4</button>
      <button id="five"      value="5">5</button>
      <button id="six"       value="6">6</button>
      <button id="add"       value="+">+</button>
      <button id="one"       value="1">1</button>
      <button id="two"       value="2">2</button>
      <button id="three"     value="3">3</button>
      <div className="bottom">
      <button id="zero" value="0">0</button>
      <button id="decimal"   value=".">.</button>
      </div>
      <button id="equals"    value="=">=</button>
    </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return state;
}

const mapDispatchToProps = {
  onNumberClick,
  onOperatorClick,
  onDecimalClick,
  onClearClick,
  onEqualClick,
  onAdditiveInverseClick
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export {
  App
};