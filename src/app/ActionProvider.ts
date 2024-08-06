// ActionProvider.ts
import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  createChatBotMessage: (message: string, options?: any) => any;
  setState: (state: any) => void;

  constructor(createChatBotMessage: (message: string, options?: any) => any, setStateFunc: (state: any) => void) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  sendWelcomeMessage = () => {
    const welcomeMessage = this.createChatBotMessage("Hi there! How can I assist you with the IG Reels Downloader today?");
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, welcomeMessage],
    }));
  };

  handleHello = () => {
    const message = this.createChatBotMessage("Hello. Nice to meet you.");
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleDeveloperInfo = () => {
    const message = this.createChatBotMessage(
      "About the Developer\n\nYash Mhatre\n\nPassionate developer with expertise in React and frontend development. " +
      "Yash Mhatre is the creator of IG Reels Downloader, aiming to provide a convenient solution for Instagram Reels enthusiasts. " +
      "If you have any feedback or suggestions for IG Reels Downloader, Yash would love to hear from you!",
      {
        widget: "developerAvatar",
      }
    );
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
