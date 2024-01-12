import React, { useEffect, useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import '../App.css';
function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Add a welcome message when the component mounts
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);

    // Manually add the user's message to the chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { id: new Date().getTime(), author: 'user', message: newMessage },
    ]);

    // Process the user's message if needed (send to backend, etc.)
    // For now, let's just echo the user's message back to the chat
    addResponseMessage('You said: ' + newMessage);
  };

  const handleToggleChat = () => {
    // Toggle the state to open or close the chat
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        isOpen={isChatOpen}
        handleToggle={handleToggleChat}
        showChat={chatHistory} // Pass the chat history to the showChat prop
      />
    </div>
  );
}

export default Chat;
