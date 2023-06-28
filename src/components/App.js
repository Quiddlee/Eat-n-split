import FriendList from './FriendList/FriendList';
import SplitBillForm from './SplitBillForm';
import { useState } from 'react';

export default function App() {
  const [openedBill, setOpenedBill] = useState(null);

  function handleOpenedBill(id) {
    if (openedBill === id) return setOpenedBill(null);
    setOpenedBill(id);
  }

  return (
    <main className="app">
      <FriendList onBillOpen={handleOpenedBill} openedBill={openedBill} />
      <SplitBillForm />
    </main>
  );
}
