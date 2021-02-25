import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './actionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  };
}
