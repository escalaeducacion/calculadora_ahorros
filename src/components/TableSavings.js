import React from 'react';
import { connect } from 'react-redux';

import payments from '../selectors/payments';
import Table from './Table';

export const TableSavings = (({payments, className})=> {
	let output=payments.slice(1)
		.filter(year=>year.balance>0 || year.interestYearly>0)
		.reduce((acc, year, index) => {
			return {
				interestTotal:acc.interestTotal+year.interestYearly,
				rows:acc.rows.concat([
						[year.partial?year.partial + "m":index+1,
						Math.round(year.interestYearly||0),
						Math.round(year.balance)]])
			}
		}, {interestTotal:0, overpaymentTotal:0, rows:[]});

	return <Table className={className}
			headings={["Años de ahorro", "Intereses", "Saldo"]}
			rows={output.rows}
			totals={[" ",Math.round(output.interestTotal)," "]} />;
});

export default connect(state=>({ ...payments(state) }))(TableSavings)