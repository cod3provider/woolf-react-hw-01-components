import TransactionItem from './TransactionItem/TransactionItem';

import s from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
    <thead className={s.th}>
    <tr>
      <th className={s.head}>Type</th>
      <th className={s.head}>Amount</th>
      <th className={s.head}>Currency</th>
    </tr>
    </thead>

    <tbody>
      <TransactionItem items={items} />
    </tbody>
  </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  )
}
