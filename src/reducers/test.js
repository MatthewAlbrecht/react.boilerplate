import {
  TEST_ACTION,
} from 'types/actions';

export default (state = 'test', action) => {
  switch (action.type) {
    case TEST_ACTION:
      return action.data;
    default:
      return state;
  }
};
