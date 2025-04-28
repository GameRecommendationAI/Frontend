"use client";

import useChat from "@/hooks/useChat";
import { useRouter } from "next/navigation";
import { Button, TextArea } from "pixel-retroui";
import { useState } from "react";

export default function GetRecommendations() {
  const [message, setMessage] = useState("");

  const { sendMessage } = useChat();
  const router = useRouter();

  return (
    <div className="w-full max-w-3xl mx-auto mt-2">
      <TextArea
        placeholder="Ask me anything about games... (e.g., 'Recommend games like Stardew Valley' or 'What are some good co-op games?')"
        className="w-full"
        bg="white"
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <div className="flex justify-center mt-5">
        <Button
          className="px-5 py-2"
          bg="#fefcd0"
          textColor="black"
          borderColor="black"
          shadow="#c381b5"
          onClick={() => {
            if (message.trim() === "") {
              return;
            }

            sendMessage(message);
            router.push("/chat");
          }}
        >
          Get Recommendations
        </Button>
      </div>
    </div>
  );
}
