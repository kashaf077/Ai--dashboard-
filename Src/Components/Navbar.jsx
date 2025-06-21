export default function Navbar({ setTab }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">🧠 AI Control Panel</h1>
      <div className="space-x-3">
        <button onClick={() => setTab('dashboard')}>📊 Dashboard</button>
        <button onClick={() => setTab('assistant')}>🤖 Assistant</button>
        <button onClick={() => setTab('uploads')}>📦 Uploads</button>
        <button onClick={() => setTab('withdraw')}>💰 Withdraw</button>
      </div>
    </nav>
  );
}
