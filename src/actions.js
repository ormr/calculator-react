const onNumberClick = (payload) => {
  return {
    type: 'SET_VALUE_NUMBER',
    payload: payload
  };
};

const onOperatorClick = (payload) => {
  return {
    type: 'SET_OPERATOR_TYPE',
    payload
  };
};

const onDecimalClick = () => {
  return {
    type: 'SET_VALUE_DECIMAL'
  };
};

const onEqualClick = () => {
  return {
    type: 'SET_OPERATOR_EQUAL'
  };
};

const onClearClick = () => {
  return {
    type: 'SET_OPERATOR_CLEAR'
  };
};

const onAdditiveInverseClick = () => {
  return {
    type: 'SWITCH_TO_ADDITIVE_INVERSE'
  };
};

export {
  onNumberClick,
  onOperatorClick,
  onDecimalClick,
  onEqualClick,
  onClearClick,
  onAdditiveInverseClick
};