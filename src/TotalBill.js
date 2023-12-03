export default function TotalBill({ totalBill, totalTip }) {
  return (
    <h3>
      You pay ${totalBill} (${totalBill - totalTip} + ${totalTip} tip)
    </h3>
  );
}
