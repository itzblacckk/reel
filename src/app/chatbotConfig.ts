// chatbotConfig.ts
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "IGReelsBot",
  initialMessages: [
    createChatBotMessage(`Hi! How can I assist you with IG Reels Downloader today?`, { delay: 500 })
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
