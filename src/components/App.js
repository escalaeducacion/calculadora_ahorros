import React from 'react';

import Header from '../components/Header';
import TableSavings from './TableSavings';
import TableDetails from './TableDetails';
import BaseFigures from './BaseFigures';
import Payment from './Payment';

export default () => (
  <div>
    <Header title={"ESCALA Calculadora de Ahorro para la Educación Superior"} />
    <div className="container-fluid">
      <div className="container-fluid col-md-6 col-sm-12">
        <BaseFigures />
        <div className="col-sm-12">
          <Payment title="Monto mensual a ahorrar  :  " />
        </div>
      </div>
      <TableSavings className="col-sm-12 col-md-4" />
      <TableDetails className="col-sm-12" />
    </div>
  </div>
)


