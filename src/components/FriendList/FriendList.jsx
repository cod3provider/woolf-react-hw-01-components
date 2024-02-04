import s from './FriendList.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      <FriendsItem friends={friends} />
    </ul>
  )
}

export default FriendList;
