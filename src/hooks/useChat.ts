import { sendMessage } from "@/lib/api";
import { Message } from "@/types";
import { create } from "zustand";

interface ChatState {
  messages: Message[];
  conversationId?: string;
  sendMessage: (message: string) => void;
  isLoading: boolean;
}

const useChat = create<ChatState>((set, get) => ({
  messages: [],
  conversationId: undefined,
  sendMessage: async (message: string) => {
    set((state) => ({
      messages: [
        ...state.messages,
        { text: message, games: [], role: "user", date: new Date() },
      ],
    }));

    set(() => ({
      isLoading: true,
    }));

    const { response, conversation_id } = await sendMessage(
      message,
      get().conversationId
    );

    set((state) => ({
      messages: [
        ...state.messages,
        {
          text: response.text,
          games: response.games,
          role: "assistant",
          date: new Date(),
        },
      ],
      conversationId: conversation_id,
    }));

    set(() => ({
      isLoading: false,
    }));
  },
  isLoading: false,
}));

export default useChat;
