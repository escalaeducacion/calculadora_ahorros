import { createSelector } from 'reselect';

import { calculatePayments } from '../helpers/saving';

const getSavings = (state) => state.saving;

export default createSelector(
  [ getSavings ],
  (saving) => {
    return calculatePayments({ ...saving })
  }
);