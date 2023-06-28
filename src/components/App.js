import FriendList from './FriendList/FriendList';
import SplitBillForm from './Forms/SplitBillForm';
import { useState } from 'react';
import INITIAL_FRIENDS from '../config';

export default function App() {
  const [openedBill, setOpenedBill] = useState(null);
  const openedBillFriendName = INITIAL_FRIENDS.find(
    ({ id }) => id === openedBill,
  )?.name;

  function handleOpenedBill(id) {
    if (openedBill === id) return setOpenedBill(null);
    setOpenedBill(id);
  }

  return (
    <main className="app">
      <FriendList onBillOpen={handleOpenedBill} openedBill={openedBill} />
      {openedBill && <SplitBillForm friendName={openedBillFriendName} />}
    </main>
  );
}
