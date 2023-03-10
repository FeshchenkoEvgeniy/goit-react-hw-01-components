import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './Transaction/TransactionHistory';
import friends from './friends.json';
import transactions from './transactions.json';
import { GlobalStyle } from "./GlobalStyle"

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
