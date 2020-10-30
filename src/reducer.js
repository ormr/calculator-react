const initialState = {
  display: '0',
  buffer: '0'
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_VALUE_NUMBER':
      if (state.display.toString().includes('=')) {
        return {
          display: state.buffer + payload, 
          buffer: state.buffer + payload
        }
      }

      if (state.display === '0' && state.buffer === '0') {
        return {
          buffer: payload,
          display: payload
        };
      }

      if (isNaN(parseFloat(state.buffer))) {
        return {
          buffer: payload,
          display: state.display + payload
        };
      }

      return {
        buffer: state.buffer + payload,
        display: state.display + payload
      };
    case 'SWITCH_TO_ADDITIVE_INVERSE':

    if (state.display.toString().includes('=')) {
      if (state.buffer.toString().slice(0, 1) !== '-') {
        return {
          display: '-' + state.buffer,
          buffer: '-' + state.buffer
        }
      }
      return {
        display: state.buffer.toString().slice(-1),
        buffer: state.buffer.toString().slice(-1)
      }
    }

      if (isNaN(parseFloat(state.buffer))) return state;

      if (state.buffer === '0' || state.display === '0') return state;

      const findLastOperator = (string) => {
        string = string.split('');
        for (let i = string.length - 1; i > 0; i--) {
          if (isNaN(parseFloat(string[i])) && string[i] !== '.') {
            return i;
          }
        }
      }

      const stringIncludesOperator = (string) => {
        string = string.split('');
        let count = 0;
        for (let i = 0; i < string.length; i++) {
          if (isNaN(parseFloat(string[i]))) {
            count += 1;
          }
        }
        return (count === 1 || count === 0) ? true : false;
      }

      const indexLastOperator = findLastOperator(state.display);

      const add = state.display.slice(0, indexLastOperator + 1) +
       '-' + state.display.slice(indexLastOperator + 1);

      const remove = state.display.slice(0, indexLastOperator) 
      + state.display.slice(indexLastOperator + 1);

      if (state.buffer.toString().slice(0, 1) === '-') {
        if (stringIncludesOperator(state.display)) {
          return {
            display: state.display.slice(1),
            buffer: state.buffer.slice(1)
          }
        }
        return {
          display: remove,
          buffer: state.buffer.slice(1)
        }
      }
      return {
        display: add,
        buffer: '-' + state.buffer
      }
    case 'SET_OPERATOR_TYPE':
      if (state.display.toString().includes('=')) {
        return {
          display: state.buffer + payload,
          buffer: payload
        }
      }

      if (isNaN(parseFloat(state.display.toString().slice(-1)))) {
        const newValue = state.display.slice(0, -1) + payload;
        return {
          buffer: payload,
          display: newValue
        };
      }
      return {
        buffer: payload,
        display: state.display + payload
      };
    case 'SET_VALUE_DECIMAL':
      if (state.display.toString().includes('=')) {
        return {
          display: state.buffer + '.',
          buffer: state.buffer + '.'
        }
      }

      if (state.buffer.toString().includes('.')) return state;

      return {
        buffer: state.buffer + '.',
        display: state.display + '.'
      };
    case 'SET_OPERATOR_EQUAL':
      if (state.display.toString().includes('=')) {
        return {
          display: state.buffer,
          buffer: state.buffer
        }
      }
    let string = state.display;
    if (string.toString().includes('--')) {
      string = string.replace(/--/i, '+');
    }
    const solution = eval(string);
    return {
      display: `${state.display}=${Number(solution.toFixed(4))}`,
      buffer: Number(solution.toFixed(4))
    };
    case 'SET_OPERATOR_CLEAR':
      return {
        buffer: '0',
        display: '0'
      };
    default:
      return state;
  };
};

export {
  reducer
};