'use client';

import { useState } from 'react';
import { CloseOutlined, MessageOutlined } from '@ant-design/icons';
import { useClickAway } from '@uidotdev/usehooks';

export const HelpChatEl = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleChat = () => setIsOpen(!isOpen);

    const ref = useClickAway(() => {
        setIsOpen(false);
    })

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(message);

        if (!message.trim()) return;
        setMessages([...messages, message]);
        setMessage('');
    };

    return (
        <div ref={ref} className="fixed bottom-4 right-4 z-50">
            {/* Toggle Chat Button */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="p-3 bg-blue-500 rounded-full text-white shadow-lg hover:bg-blue-600"
                >
                    <MessageOutlined style={{ fontSize: '24px' }} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="w-72 h-96 bg-white shadow-xl rounded-lg flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 bg-blue-500 text-white rounded-t-lg">
                        <h4 className="font-bold">Help Chat</h4>
                        <button onClick={toggleChat}>
                            <CloseOutlined style={{ fontSize: '18px' }} />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {messages.length === 0 ? (
                            <p className="text-gray-500 text-sm">
                                How can we assist you today?
                            </p>
                        ) : (
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className="p-2 bg-blue-100 my-2 rounded-lg"
                                >
                                    {msg}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Input Box */}
                    <form
                        onSubmit={sendMessage}
                        className="p-3 border-t border-gray-200 flex"
                    >
                        <input
                            type="text"
                            className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default HelpChatEl;
