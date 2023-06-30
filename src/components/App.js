import FriendList from './FriendList/FriendList';
import SplitBillForm from './Forms/SplitBillForm';
import { useState } from 'react';
import { INITIAL_FRIENDS, WHO_PAY_DEFAULT_VAL } from '../config';
import Button from './Button';
import AddFriendForm from './Forms/AddFriendForm';

export default function App() {
  const [userData, setUserData] = useState(INITIAL_FRIENDS);
  const [openedBill, setOpenedBill] = useState(null);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);

  const openedBillFriendName = userData.find(
    ({ id }) => id === openedBill,
  )?.name;

  /**
   * @param id {number}
   * @returns {() => void}
   */
  function handleOpenedBill(id) {
    if (openedBill === id) return setOpenedBill(null);
    setOpenedBill(id);
    setIsAddFriendOpen(false);
  }

  /**
   * @param whoPay {string}
   * @param friendExpense {number}
   * @param expenseVal {number}
   */
  function handleUpdateUserExpense(whoPay, friendExpense, expenseVal) {
    setUserData((data) => {
      const newData = structuredClone(data);

      newData.forEach((friend) => {
        if (friend.id !== openedBill) return;

        if (whoPay === WHO_PAY_DEFAULT_VAL) {
          friend.balance = friend.balance + friendExpense;
        } else {
          friend.balance = friend.balance - expenseVal;
        }
      });

      return newData;
    });
  }

  function handleOpenAddFriendForm() {
    setIsAddFriendOpen((currState) => !currState);
  }

  /**
   * @param newUser {{
   *        id: string,
   *        friendNameVal: string,
   *        imageUrlVal: string,
   *        balance: number,
   *     }}
   */
  function handleAddNewUser(newUser) {
    setUserData((users) => [...users, newUser]);
    handleOpenAddFriendForm();
  }

  return (
    <main className="app">
      <aside className="sidebar">
        <FriendList
          friendData={userData}
          onBillOpen={handleOpenedBill}
          openedBill={openedBill}
        />

        {isAddFriendOpen && <AddFriendForm onAddNewUser={handleAddNewUser} />}

        <Button onClick={handleOpenAddFriendForm}>
          {isAddFriendOpen ? 'Close' : 'Add friend'}
        </Button>
      </aside>

      {openedBill && (
        <SplitBillForm
          key={openedBillFriendName}
          friendName={openedBillFriendName}
          onBillSubmit={handleUpdateUserExpense}
        />
      )}
    </main>
  );
}
