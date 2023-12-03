export default function InputRating({ rating, onSetRating, children }) {
  // const [rating, setRating] = useState("Dissatisfied (0%)");

  return (
    <p>
      <span>{children}</span>
      <span>
        <select value={rating} onChange={(e) => onSetRating(e.target.value)}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </span>
    </p>
  );
}
