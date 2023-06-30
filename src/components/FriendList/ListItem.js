import Button from '../Button';

export default function ListItem({
  data: { id, name, image, balance },
  openedBill,
  onBillOpen,
}) {
  return (
    <li className={openedBill === id ? 'selected' : ''}>
      <img src={image} alt={`Friend ${name}`} />
      <h3>{name}</h3>

      {balance < 0 ? (
        <p className="red">
          You owe {name} {Math.abs(balance)}€
        </p>
      ) : balance === 0 ? (
        <p>You and {name} are even</p>
      ) : (
        <p className="green">
          {name} owes you {balance}€
        </p>
      )}

      <Button onClick={onBillOpen.bind(null, id)}>
        {openedBill === id ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}
