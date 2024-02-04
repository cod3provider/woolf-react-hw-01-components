import s from './TransactionItem.module.css';

const TransactionItem = ({ items }) => {
  return (
    items.map(({ id, type, amount, currency }) => (
      <tr className={s.tr} key={id}>
        <td className={s.td}>{type}</td>
        <td className={s.td}>{amount}</td>
        <td className={s.td}>{currency}</td>
      </tr>
    ))
  )
}

export default TransactionItem;
