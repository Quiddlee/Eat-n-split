export default function ListItem({ data: { name, image, balance }, children }) {
  return (
    <li>
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

      {children}
    </li>
  );
}
