import Button from '../Button';
import { useState } from 'react';

export default function SplitBillForm({ friendName }) {
  const [billVal, setBillVal] = useState('');
  const [expenseVal, setExpenseVal] = useState('');
  const [whoPay, setWhoPay] = useState('You');
  const friendExpense = +billVal - +expenseVal;

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

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friendName}</h2>

      <label>💰 Bill value</label>
      <input
        value={billVal}
        onChange={(e) => handleBillVal(e.target.value)}
        type="text"
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        value={expenseVal}
        onChange={(e) => handleExpenseVal(e.target.value)}
        type="text"
      />

      <label>👫 ️ {friendName} expense</label>
      <input value={friendExpense} type="text" disabled={true} />

      <label>🤑 Who is paying the bill</label>
      <select value={whoPay} onChange={(e) => handleWhoPay(e.target.value)}>
        <option value="You">You</option>
        <option value="Friend">{friendName}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
