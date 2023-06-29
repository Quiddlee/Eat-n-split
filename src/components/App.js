import FriendList from './FriendList/FriendList';
import SplitBillForm from './Forms/SplitBillForm';
import { useState } from 'react';
import { INITIAL_FRIENDS, WHO_PAY_DEFAULT_VAL } from '../config';

export default function App() {
  const [friendData, setFriendsData] = useState(INITIAL_FRIENDS);
  const [openedBill, setOpenedBill] = useState(null);
  const [billVal, setBillVal] = useState('');
  const [expenseVal, setExpenseVal] = useState('');
  const [whoPay, setWhoPay] = useState(WHO_PAY_DEFAULT_VAL);

  const friendExpense = +billVal - +expenseVal;
  const openedBillFriendName = INITIAL_FRIENDS.find(
    ({ id }) => id === openedBill,
  )?.name;

  /**
   * @param newVal {string}
   * @returns {boolean}
   */
  function valIsNotNumber(newVal) {
    return newVal !== '' && !Number(newVal);
  }

  function handleBillVal(newVal) {
    if (valIsNotNumber(newVal)) return;
    setBillVal(newVal);
  }

  function handleExpenseVal(newVal) {
    if (Number(newVal) > billVal || valIsNotNumber(newVal)) return;
    setExpenseVal(Math.abs(newVal));
  }

  function handleWhoPay(val) {
    setWhoPay(val);
  }

  function handleOpenedBill(id) {
    if (openedBill === id) return setOpenedBill(null);
    setOpenedBill(id);
  }

  return (
    <main className="app">
      <FriendList
        friendData={friendData}
        onBillOpen={handleOpenedBill}
        openedBill={openedBill}
      />
      {openedBill && (
        <SplitBillForm
          whoPay={whoPay}
          billVal={billVal}
          friendExpense={friendExpense}
          expenseVal={expenseVal}
          onBillVal={handleBillVal}
          onExpenseVal={handleExpenseVal}
          onWhoPay={handleWhoPay}
          friendName={openedBillFriendName}
        />
      )}
    </main>
  );
}
