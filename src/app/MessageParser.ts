// MessageParser.ts
class MessageParser {
    actionProvider: any;
  
    constructor(actionProvider: any) {
      this.actionProvider = actionProvider;
    }
  
    parse = (message: string) => {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.handleHello();
      } else if (lowerCaseMessage.includes("developer")) {
        this.actionProvider.handleDeveloperInfo();
      } else if (lowerCaseMessage.includes("yash")) {
        this.actionProvider.handleDeveloperInfo();
      } 
    };
  }
  
  export default MessageParser;
  