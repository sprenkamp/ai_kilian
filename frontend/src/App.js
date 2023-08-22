import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import ChatWindow from './components/ChatWindow';

function App() {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', // Change to column to stack children vertically
            alignItems: 'center',    // Center children horizontally
            justifyContent: 'center',// Center children vertically
            height: '100vh',         // Take full viewport height
            padding: '20px'
        }}>
            <VideoPlayer />
            <ChatWindow />
        </div>
    );
}

export default App;
