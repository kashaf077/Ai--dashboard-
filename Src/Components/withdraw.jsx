export default function Withdraw() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl mb-4">💰 Withdraw Earnings</h2>
      <p className="mb-4">Click below to withdraw to your PayPal account:</p>
      <button
        onClick={() => alert("Withdrawal request sent to PayPal")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Withdraw to PayPal
      </button>
    </div>
  );
}
