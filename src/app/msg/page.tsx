"use client"
import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '../chatbotConfig';
import ActionProvider from '../ActionProvider';
import MessageParser from '../MessageParser';

export default function IGReelsDownloader() {
  const [chatBotRef, setChatBotRef] = useState<any>(null);

  useEffect(() => {
    if (chatBotRef) {
      chatBotRef.actionProvider.sendWelcomeMessage();
    }
  }, [chatBotRef]);

  return (
    <div className=" bg-black text-white">
    <div className=" w-[200px] h-[400px]">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        //ref={setChatBotRef} // Pass ref to access the action provider
      />
    </div>
    </div>
  );
}
