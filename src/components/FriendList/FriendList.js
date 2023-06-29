import ListItem from './ListItem';
import Button from '../Button';
import AddFriendForm from '../Forms/AddFriendForm';

export default function FriendList({
  friendData,
  onBillOpen,
  openedBill,
  isAddFriendOpen,
  onOpenAddFriendForm,
  onAddNewUser,
}) {
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
      {isAddFriendOpen && (
        <AddFriendForm
          onOpenAddFriendForm={onOpenAddFriendForm}
          onAddNewUser={onAddNewUser}></AddFriendForm>
      )}
      <Button onClick={onOpenAddFriendForm}>
        {isAddFriendOpen ? 'Close' : 'Add friend'}
      </Button>
    </article>
  );
}
