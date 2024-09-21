import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({ input }) {
  const tableData = calculateInvestmentResults(input);
  const initialInvestment =
    tableData[0].valueEndOfYear -
    tableData[0].interest -
    tableData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (value)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)} </td>
              <td>{formatter.format(totalInterest)} </td>
              <td>{formatter.format(totalAmountInvested)} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
