export function Colors({ arr }) {
  return (
    <>
      <ul>
        {arr.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
