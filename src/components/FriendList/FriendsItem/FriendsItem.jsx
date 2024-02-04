import s from './FriendsItem.module.css';

const FriendsItem = ({ friends }) => {
  const classNames = ['status', friends.status];
  friends.status ? classNames.push('offline') : classNames.push('online');

  return (
    friends.map(({ id, status, avatar, name }) => <li className={s.item} key={id}>
      <span className={s.status}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>)
  )
}

export default FriendsItem;
