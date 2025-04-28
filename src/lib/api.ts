import { Message } from "@/types";

export async function sendMessage(message: string, conversationId?: string) {
  const response = await fetch("http://localhost:3001/chat", {
    method: "POST",
    body: JSON.stringify({ message, conversationId }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = (await response.json()) as {
    type: string;
    response: Message;
    conversation_id: string;
  };

  return json;
}
