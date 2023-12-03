import InputBill from "./InputBill";
import InputRating from "./InputRating";
import TotalBill from "./TotalBill";
import Reset from "./Reset";
import { useState } from "react";

export default function App() {
  // lifting state up
  const [bill, setBill] = useState("");
  const [rating1, setRating1] = useState("0");
  const [rating2, setRating2] = useState("0");

  const totalTip = ((Number(rating1) + Number(rating2)) / 2) * 0.01 * bill;
  const totalBill = Number(bill) + totalTip;

  return (
    <div>
      <InputBill bill={bill} onSetBill={setBill} />
      <InputRating rating={rating1} onSetRating={setRating1}>
        How did you like the service?{" "}
      </InputRating>
      <InputRating rating={rating2} onSetRating={setRating2}>
        How did your friend like the service?{" "}
      </InputRating>
      {bill > 0 && <TotalBill totalBill={totalBill} totalTip={totalTip} />}
      <Reset
        onSetBill={setBill}
        onSetRating1={setRating1}
        onSetRating2={setRating2}
      />
    </div>
  );
}
