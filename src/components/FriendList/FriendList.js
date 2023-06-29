import ListItem from './ListItem';

export default function FriendList({ friendData, onBillOpen, openedBill }) {
  return (
    <ul>
      {friendData.map((data) => (
        <ListItem
          key={data.id}
          id={data.id}
          data={data}
          openedBill={openedBill}
          onBillOpen={onBillOpen}
        />
      ))}
    </ul>
  );
}
