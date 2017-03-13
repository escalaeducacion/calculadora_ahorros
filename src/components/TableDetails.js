import React from 'react';
import {
  connect
} from 'react-redux';
import {
  UNIVERSITY_YEARS,
  getAnnualSaving,
  getPayment,
  getPaymentMinusDiscount,
  getESCALACommission,
  getEmployeePayment,
  getCompanyPayment
} from '../ducks/university';

import payments from '../selectors/payments';
import Table from './Table';

export const TableDetails = (({payments, state, className})=> {

  let requiredInfo = state.saving.hasOwnProperty('initial') &&
    state.saving.hasOwnProperty('costUniversity') &&
    state.saving.hasOwnProperty('discountUniversity') &&
    state.saving.hasOwnProperty('employeCategory');

  if (requiredInfo) {
	let lastPayment = payments[payments.length - 1];
	let accountBalance = lastPayment.balance;
	let previousPayment = 0;
	let calculationYears = UNIVERSITY_YEARS.slice();

	//Used to accumulate totals for commissions, payments from company and employee
	let totalCommission = 0;
	let totalEmployeePayment = 0;
	let totalCompanyPayment = 0;

	let universityData = calculationYears.map(year => {
		let row = [];
		row.push(year);

		row.push(Math.round(accountBalance));

		let annualSaving = getAnnualSaving(state.saving.initial, accountBalance);
		row.push(Math.round(annualSaving));

		let payment = getPayment(state.saving.costUniversity, previousPayment, (payments.length - 1), year);
		row.push(Math.round(payment));

		let paymentMinusDiscount = getPaymentMinusDiscount(payment, state.saving.discountUniversity);
		row.push(Math.round(paymentMinusDiscount));

		let comission = getESCALACommission(payment);
		row.push(Math.round(comission));
		totalCommission += comission;

		let employeePayment = getEmployeePayment(paymentMinusDiscount, comission, state.saving.employeCategory);
		row.push(Math.round(employeePayment));
		totalEmployeePayment += employeePayment;

		let companyPayment = getCompanyPayment(paymentMinusDiscount, comission, state.saving.employeCategory);
		row.push(Math.round(companyPayment));
		totalCompanyPayment += companyPayment;

		let newBalance = accountBalance + annualSaving - employeePayment;
		row.push(Math.round(newBalance));
		
		previousPayment = payment;
		accountBalance = newBalance;
		
		return row;
	});

	return <Table className = {className}
	style = {{marginTop: "30px"}}
	headings = {[
		"Años de ahorro", 
		"Saldo", 
		"Ahorro anual", 
		"Pago", 
		"Pago - Descuento", 
		"Comisión ESCALA", 
		"Empleado", 
		"Compañía", 
		"Saldo Final"
		]}
	rows = {universityData}
	totals = {["", "", "", "", "", Math.round(totalCommission), Math.round(totalEmployeePayment), Math.round(totalCompanyPayment), ""]}
	/>;
  }

  return <div></div>;
});

export default connect(state => ({ ...payments(state), state}))(TableDetails);
