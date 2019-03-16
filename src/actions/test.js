import {
  TEST_ACTION,
} from 'types/actions';

export const changeLocale = (data) => dispatch => {
  dispatch({
    type: TEST_ACTION,
    data,
  });
};
