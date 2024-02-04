import s from './FriendList.module.css';
import FriendsItem from './FriendsItem/FriendsItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      <FriendsItem friends={friends} />
    </ul>
  )
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  )
}
