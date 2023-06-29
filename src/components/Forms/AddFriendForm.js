import Button from '../Button';
import { useState } from 'react';
import { RANDOM_AVATAR_URL } from '../../config';

export default function AddFriendForm({ onAddNewUser, onOpenAddFriendForm }) {
  const [friendNameVal, setFriendNameVal] = useState('');
  const [imageUrlVal, setImageUrlVal] = useState(RANDOM_AVATAR_URL);

  function handleAddFriendFormSubmit(e) {
    e.preventDefault();
    onAddNewUser(friendNameVal, imageUrlVal);
    onOpenAddFriendForm();
  }

  return (
    <form onSubmit={handleAddFriendFormSubmit} className="form-add-friend">
      <label>👫 Friend name</label>
      <input
        value={friendNameVal}
        onChange={(e) => setFriendNameVal(e.target.value)}
        type="text"
      />

      <label>🌄 Image URL</label>
      <input
        value={imageUrlVal}
        onChange={(e) => setImageUrlVal(e.target.value)}
        type="text"
      />

      <Button>Add</Button>
    </form>
  );
}
