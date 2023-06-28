import Button from '../Button';

export default function SplitBillForm({
  friendName,
  whoPay,
  billVal,
  expenseVal,
  friendExpense,
  onBillVal,
  onExpenseVal,
  onWhoPay,
}) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friendName}</h2>

      <label>💰 Bill value</label>
      <input
        value={billVal}
        onChange={(e) => onBillVal(e.target.value)}
        type="text"
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        value={expenseVal}
        onChange={(e) => onExpenseVal(e.target.value)}
        type="text"
      />

      <label>👫 ️ {friendName} expense</label>
      <input value={friendExpense} type="text" disabled={true} />

      <label>🤑 Who is paying the bill</label>
      <select value={whoPay} onChange={(e) => onWhoPay(e.target.value)}>
        <option value="You">You</option>
        <option value="Friend">{friendName}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
