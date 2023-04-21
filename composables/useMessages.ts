export type Message = {
  sender: string;
  message: string;
  isoTime: string;
};

export const useMessages = () => useState("messages", (): Message[] => []);
