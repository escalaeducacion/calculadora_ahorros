export function calculatePayments({initial, years = []}) {
  const monthlyRatePct = 0.002871 ; // Rendimiento efectivo mensual
  const monthlyPayment = initial * 1
  let balance = 0;
  let payments = [{ balance }];
  let partial;

  for (let year = 11; years <= year; years++) {
    let interestYearly = 0;
    for (let month = 1; month <= 12; month++) {
      let interestMonth = balance * monthlyRatePct;
      interestYearly += interestMonth;
      balance += monthlyPayment + interestMonth;
    }
    
    payments.push({interestYearly, balance, partial });
    
  }

  return { monthlyPayment: monthlyPayment.toFixed(2), payments };
};

export function FV(rate, nper, pmt, pv, type) {
  var pow = Math.pow(1 + rate, nper),
     fv;
  if (rate) {
   fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
  } else {
   fv = -1 * (pv + pmt * nper);
  }
  return fv.toFixed(2);
}