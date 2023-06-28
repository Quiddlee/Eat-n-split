import ListItem from './ListItem';
import INITIAL_FRIENDS from '../../config';
import { useState } from 'react';
import Button from '../Button';

export default function FriendList() {
  const [openedBill, setOpenedBill] = useState(null);

  function handleOpenedBill(id) {
    if (openedBill === id) return setOpenedBill(null);
    setOpenedBill(id);
  }

  return (
    <article className="sidebar">
      <ul>
        {INITIAL_FRIENDS.map((data) => (
          <ListItem key={data.id} id={data.id} data={data}>
            <Button onClick={handleOpenedBill.bind(null, data.id)}>
              {openedBill === data.id ? 'Close' : 'Select'}
            </Button>
          </ListItem>
        ))}
      </ul>
    </article>
  );
}
