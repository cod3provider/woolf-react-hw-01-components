import TransactionItem from './TransactionItem/TransactionItem';

import s from './TransactionHistory.module.css'

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
