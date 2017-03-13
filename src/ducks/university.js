import { FV } from '../helpers/saving';

const RATE = 0.035; //3.50 %
const RATE_ENROLLMENT = 0.05; //5.00 %
const ESCALA_COMMISSION = 0.1; //10.00 %
export const UNIVERSITY_YEARS = [1, 2, 3, 4, 5]; //University degrees take 5 years

/**
 * Returns annual savings by calculating future value minus the balance
 * @param {Number} amount 
 * @param {Number} balance 
 * @param {Number} months 
 */
export function getAnnualSaving(amount, balance, months = 12) {
	return (-1 * (FV(RATE / months, months, amount, balance, 0))) - balance;
}

/**
 * 	Returns the payment, based on enrollment fee, the previous payment (if there's any),
 * the number of the years in high school since the loan begun, and the year for which
 * the payment is calculated
 * @param {Number} enrollmentFee 
 * @param {Number} previousPayment 
 * @param {Number} highSchoolYears 
 * @param {Number} year 
 */
export function getPayment(enrollmentFee, previousPayment, highSchoolYears, year) {
	let payment = 0;
	if(year === 1) {
		payment = enrollmentFee * 2 * Math.pow((1 + RATE_ENROLLMENT), highSchoolYears);
	} else {
		payment = (previousPayment * RATE_ENROLLMENT) + previousPayment;
	}

	return payment;
}

/**
 * Returns the payment minus the university discount
 * @param {Number} payment 
 * @param {Number} universityDiscount 
 */
export function getPaymentMinusDiscount(payment, universityDiscount) {
	return payment - (payment * universityDiscount);
}
/**
 * Returns ESCALA commission based on payment
 * @param {Number} payment 
 */
export function getESCALACommission(payment) {
	return payment * ESCALA_COMMISSION;
}

/**
 * Returns the employe payment based on employee category and the ESCALA commission
 * @param {Number} payment 
 * @param {Number} comission 
 * @param {Number} employeeCategory 
 */
export function getEmployeePayment(payment, comission, employeeCategory) {
	return (payment + comission) * (1 - employeeCategory);
}

/**
 * Returns the company payment based on employee category and the ESCALA commission.
 * This payment is complementary to the employee payment
 * @param {Number} payment 
 * @param {Number} comission 
 * @param {Number} employeeCategory 
 */
export function getCompanyPayment(payment, comission, employeeCategory) {
	return (payment + comission) * employeeCategory;
}