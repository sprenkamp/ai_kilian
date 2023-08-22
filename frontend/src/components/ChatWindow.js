import React, { useState } from 'react';

// ... (rest of the imports and useState)

function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div style={{ marginTop: '20px', width: '320px' }}>
            <div style={{ 
                height: '240px', 
                overflowY: 'scroll', 
                border: '1px solid gray', 
                padding: '10px'
            }}>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                style={{ width: '100%', marginTop: '10px' }}
            />
            <button onClick={sendMessage} style={{ width: '100%', marginTop: '10px' }}>
                Send
            </button>
        </div>
    );
}

export default ChatWindow;
