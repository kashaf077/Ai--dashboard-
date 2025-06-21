export default function Dashboard() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl mb-4">📊 Job & Task Overview</h2>
      <ul className="space-y-2">
        <li>📝 Remote Jobs Submitted: <b>31</b></li>
        <li>✅ Online Tasks Completed: <b>27</b></li>
        <li>💵 Total Earnings Today: <b>$62.40</b></li>
      </ul>
    </div>
  );
}