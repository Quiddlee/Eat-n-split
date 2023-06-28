import Button from '../Button';
import LabelInput from './LabelInput';

export default function SplitBillForm({ friendName }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friendName}</h2>

      {['💰 Bill value', '🧍‍♀️ Your expense', `👫 ️ ${friendName} expense`].map(
        (content) => {
          return (
            <LabelInput key={content} isDisabled={content.match(friendName)}>
              {content}
            </LabelInput>
          );
        },
      )}

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="0">You</option>
        <option value="1">{friendName}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
