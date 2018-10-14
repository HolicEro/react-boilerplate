import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the globalHeader state domain
 */

const selectGlobalHeaderDomain = state =>
  state.get('globalHeader', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by GlobalHeader
 */

const makeSelectGlobalHeader = () =>
  createSelector(selectGlobalHeaderDomain, substate => substate.toJS());

export default makeSelectGlobalHeader;
export { selectGlobalHeaderDomain };
