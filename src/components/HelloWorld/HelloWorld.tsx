import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from '../../store/actions/actionTypes';
import * as CounterActions from '../../store/actions/counterActions';

function HelloWorld({ counter, actions }) {
  const addCounter = () => {
    actions.increment();
  };

  const subtractCounter = () => {
    actions.decrement();
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={addCounter}>Add</button>
      <button onClick={subtractCounter}>Sub</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(CounterActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
