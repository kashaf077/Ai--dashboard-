import { useState } from 'react';

export default function Assistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;
    setMessages([...messages, { role: 'user', text: input }]);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: input }],
      }),
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    setMessages((prev) => [...prev, { role: 'ai', text: reply }]);
    setInput('');
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl mb-4">🤖 GPT Assistant</h2>
      <div className="h-64 overflow-y-auto mb-4 p-2 border rounded bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            <b>{msg.role === 'user' ? 'You' : 'AI'}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-3 py-2 w-full mb-2"
        placeholder="Type a question..."
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
}