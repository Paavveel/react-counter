import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

function Counter({ counter, decrement, increment, incrementRandom, reset }) {
  return (
    <div className='jumbotron'>
      <h2>{counter}</h2>
      <button className='btn btn-primary btn-lg' onClick={decrement}>
        DEC
      </button>
      <button className='btn btn-primary btn-lg' onClick={increment}>
        INC
      </button>
      <button className='btn btn-primary btn-lg' onClick={incrementRandom}>
        RND
      </button>
      <button className='btn btn-primary btn-lg' onClick={reset}>
        RESET
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
