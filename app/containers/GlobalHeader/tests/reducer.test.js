import { fromJS } from 'immutable';
import globalHeaderReducer from '../reducer';

describe('globalHeaderReducer', () => {
  it('returns the initial state', () => {
    expect(globalHeaderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
