import PropTypes from 'prop-types';

import FriendsItem from './FriendsItem/FriendsItem';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
