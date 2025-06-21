import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Assistant from './components/Assistant';
import Uploads from './components/Uploads';
import Withdraw from './components/Withdraw';

function App() {
  const [tab, setTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar setTab={setTab} />
      <div className="p-4">
        {tab === 'dashboard' && <Dashboard />}
        {tab === 'assistant' && <Assistant />}
        {tab === 'uploads' && <Uploads />}
        {tab === 'withdraw' && <Withdraw />}
      </div>
    </div>
  );
}

export default App;
