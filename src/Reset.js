export default function Reset({ onSetBill, onSetRating1, onSetRating2 }) {
  return (
    <button
      onClick={() => {
        onSetBill("");
        onSetRating1("0");
        onSetRating2("0");
      }}
    >
      Reset
    </button>
  );
}
