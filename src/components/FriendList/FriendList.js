import ListItem from './ListItem';
import Button from '../Button';

export default function FriendList({ friendData, onBillOpen, openedBill }) {
  return (
    <article className="sidebar">
      <ul>
        {friendData.map((data) => (
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
