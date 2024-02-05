import PropTypes from 'prop-types';

import s from './FriendsItem.module.css';

const FriendsItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt='User avatar' width='48' />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendsItem;

FriendsItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
