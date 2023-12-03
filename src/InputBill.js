export default function InputBill({ bill, onSetBill }) {
  // const [bill, setBill] = useState(0);

  return (
    <p>
      <span>How much was the bill? </span>
      <span>
        <input
          type="number"
          value={bill}
          placeholder="Bill value"
          onChange={(e) => onSetBill(e.target.value)}
        ></input>
      </span>
    </p>
  );
}
