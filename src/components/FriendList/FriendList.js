import ListItem from './ListItem';
import { INITIAL_FRIENDS } from '../../config';
import Button from '../Button';

export default function FriendList({ onBillOpen, openedBill }) {
  return (
    <article className="sidebar">
      <ul>
        {INITIAL_FRIENDS.map((data) => (
          <ListItem key={data.id} id={data.id} data={data}>
            <Button onClick={onBillOpen.bind(null, data.id)}>
              {openedBill === data.id ? 'Close' : 'Select'}
            </Button>
          </ListItem>
        ))}
      </ul>
    </article>
  );
}
