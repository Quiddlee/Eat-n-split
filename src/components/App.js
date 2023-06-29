import FriendList from './FriendList/FriendList';
import SplitBillForm from './Forms/SplitBillForm';
import { useState } from 'react';
import { INITIAL_FRIENDS, WHO_PAY_DEFAULT_VAL } from '../config';

export default function App() {
  const [userData, setUserData] = useState(INITIAL_FRIENDS);
  const [openedBill, setOpenedBill] = useState(null);
  const [billVal, setBillVal] = useState('');
  const [expenseVal, setExpenseVal] = useState('');
  const [whoPay, setWhoPay] = useState(WHO_PAY_DEFAULT_VAL);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);

  const friendExpense = Number(billVal) - Number(expenseVal);
  const openedBillFriendName = userData.find(
    ({ id }) => id === openedBill,
  )?.name;

  /**
   * @param newVal {string}
   * @returns {boolean}
   */
  function valIsNotNumber(newVal) {
    return newVal !== '' && !Number(newVal);
  }

  /**
   * @param newVal {string}
   */
  function handleBillVal(newVal) {
    if (valIsNotNumber(newVal)) return;
    setBillVal(newVal);
  }

  /**
   * @param newVal {string}
   */
  function handleExpenseVal(newVal) {
    if (Number(newVal) > billVal || valIsNotNumber(newVal)) return;
    setExpenseVal(Math.abs(newVal));
  }

  /**
   * @param val {number}
   */
  function handleWhoPay(val) {
    setWhoPay(val);
  }

  /**
   * @param id {number}
   * @returns {() => void}
   */
  function handleOpenedBill(id) {
    if (openedBill === id) return setOpenedBill(null);
    setOpenedBill(id);
  }

  function handleUpdateUserExpense() {
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

  function handleResetForm() {
    setBillVal('');
    setExpenseVal('');
    setWhoPay(WHO_PAY_DEFAULT_VAL);
  }

  function handleOpenAddFriendForm() {
    setIsAddFriendOpen((currState) => !currState);
  }

  /**
   * @param name {string}
   * @param image {string}
   */
  function handleAddNewUser(name, image) {
    setUserData((data) => {
      const newData = structuredClone(data);
      newData.push({ id: Date.now(), name, image, balance: 0 });
      return newData;
    });
  }

  return (
    <main className="app">
      <FriendList
        friendData={userData}
        onBillOpen={handleOpenedBill}
        openedBill={openedBill}
        isAddFriendOpen={isAddFriendOpen}
        onOpenAddFriendForm={handleOpenAddFriendForm}
        onAddNewUser={handleAddNewUser}
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
          onBillSubmit={handleUpdateUserExpense}
          onResetForm={handleResetForm}
        />
      )}
    </main>
  );
}
