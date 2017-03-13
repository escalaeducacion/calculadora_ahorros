import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import payments from '../selectors/payments'

export default connect((state, props)=>({ ...payments(state) }))(
({monthlyPayment, title})=> (
  <h2>{title}
    <NumberFormat className="money" value={(+monthlyPayment)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
  </h2>
))