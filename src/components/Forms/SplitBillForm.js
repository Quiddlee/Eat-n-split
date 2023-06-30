import Button from '../Button';
import { WHO_PAY_DEFAULT_VAL } from '../../config';
import { useState } from 'react';

export default function SplitBillForm({ friendName, onBillSubmit }) {
  const [billVal, setBillVal] = useState('');
  const [expenseVal, setExpenseVal] = useState('');
  const [whoPay, setWhoPay] = useState(WHO_PAY_DEFAULT_VAL);
  const friendExpenseVal = billVal - expenseVal || '';

  /**
   * @param newVal {number | string}
   * @returns {boolean}
   */
  function valIsNotNumber(newVal) {
    return newVal !== '' && !Number.isFinite(newVal);
  }

  /**
   * @param e {SubmitEvent}
   */
  function handleSubmitForm(e) {
    e.preventDefault();
    handleResetBillForm();
    onBillSubmit(
      whoPay === WHO_PAY_DEFAULT_VAL ? friendExpenseVal : -expenseVal,
    );
  }

  /**
   * @param newVal {number}
   */
  function handleBillVal(newVal) {
    if (valIsNotNumber(newVal)) return;
    setBillVal(newVal || '');
  }

  /**
   * @param newVal {number}
   */
  function handleExpenseVal(newVal) {
    if (newVal > billVal || valIsNotNumber(newVal)) return;
    setExpenseVal(Math.abs(newVal) || '');
  }

  /**
   * @param val {string}
   */
  function handleWhoPay(val) {
    setWhoPay(val);
  }

  function handleResetBillForm() {
    setBillVal('');
    setExpenseVal('');
    setWhoPay(WHO_PAY_DEFAULT_VAL);
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmitForm(e)}>
      <h2>Split a bill with {friendName}</h2>

      <label>💰 Bill value</label>
      <input
        value={billVal}
        onChange={(e) => handleBillVal(+e.target.value)}
        type="text"
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        value={expenseVal}
        onChange={(e) => handleExpenseVal(+e.target.value)}
        type="text"
      />

      <label>👫 ️ {friendName} expense</label>
      <input value={friendExpenseVal} type="text" disabled={true} />

      <label>🤑 Who is paying the bill</label>
      <select value={whoPay} onChange={(e) => handleWhoPay(e.target.value)}>
        <option value="You">You</option>
        <option value="Friend">{friendName}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
