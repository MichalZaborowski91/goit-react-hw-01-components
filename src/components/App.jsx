import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { Friends } from './friends/friends.jsx';
import { Transactions } from './transactions/transactions.jsx';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <Friends />
      <Transactions />
    </div>
  );
};
