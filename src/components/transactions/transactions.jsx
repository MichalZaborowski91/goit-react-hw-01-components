import transactions from './transactions.json';
import css from './transactions.module.css';
import PropTypes from 'prop-types';

export const Transactions = () => {
  const transactionsArray = transactions;
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableHeadRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionsArray.map(transaction => (
          <tr className={css.tableBodyRow} key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Transactions.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
