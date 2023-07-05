import friends from './friends.json';
import css from './friends.module.css';
import PropTypes from 'prop-types';

export const Friends = () => {
  const friendsArray = friends;
  return (
    <ul className={css.friendList}>
      {friendsArray.map(friend => (
        <li className={css.item} key={friend.id}>
          <span>
            {friend.isOnline === true ? (
              <div className={css.isOnline}>{friend.isOnline}</div>
            ) : (
              <div className={css.isOffline}>{friend.isOnline}</div>
            )}
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="60"
            height="60"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
Friends.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
