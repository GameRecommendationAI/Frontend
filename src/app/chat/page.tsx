"use client";

import useChat from "@/hooks/useChat";
import Image from "next/image";
import { Button, Bubble, Input } from "pixel-retroui";
import { useState, useEffect, useRef } from "react";
import GameCard from "./GameCard";

export default function ChatPage() {
  const { messages, sendMessage, isLoading } = useChat();

  const [message, setMessage] = useState("");
  const [dots, setDots] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Animation effect for the loading dots
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isLoading]);

  // Scroll to bottom whenever messages change or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] px-4 md:px-8 py-5">
      <main className="flex flex-col w-full max-w-4xl mx-auto flex-1 overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="py-2 flex items-center">
            <Image
              src="/sparkle.png"
              width={20}
              height={20}
              alt="sparkle"
              className="mr-2"
            />
            <h2 className="text-lg font-medium">Game Chat</h2>
          </div>

          <div className="border border-black rounded-lg bg-white p-3 mb-4 flex-1 overflow-y-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "user" ? (
                    <Bubble
                      direction="right"
                      className={`max-w-[80%]`}
                      bg="#fefcd0"
                    >
                      <p className="text-sm whitespace-pre-line">
                        {message.text}
                      </p>
                      <div className="text-right mt-1">
                        <span className="text-[10px] text-gray-400">
                          {new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </Bubble>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Bubble direction="left" className="max-w-[80%]">
                        <div className="flex items-center mb-2">
                          <Image
                            src="/sparkle.png"
                            width={20}
                            height={20}
                            alt="AI"
                            className="mr-2"
                          />
                          <span className="text-xs font-medium">Game AI</span>
                        </div>
                        <p className="text-sm whitespace-pre-line">
                          {message.text}
                        </p>
                        <div className="text-right mt-1">
                          <span className="text-[10px] text-gray-400">
                            {message.date.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </Bubble>

                      <p>Recommendations:</p>
                      <div className="gap-2 grid grid-cols-2">
                        {message.games.map((game) => (
                          <GameCard key={game.id} game={game} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <Bubble direction="left" className="max-w-[80%]">
                  <div className="flex items-center mb-2">
                    <Image
                      src="/sparkle.png"
                      width={20}
                      height={20}
                      alt="AI"
                      className="mr-2"
                    />
                    <span className="text-xs font-medium">Game AI</span>
                  </div>
                  <div className="flex items-center">
                    {/* eslint-disable @next/next/no-img-element  */}
                    <img
                      src="https://media.tenor.com/VEp3WM5DV3UAAAAj/sonic.gif"
                      className="w-16 h-16 mr-4"
                      alt="Thinking"
                      style={{ transform: "scaleX(-1)" }}
                    />
                    <p className="text-sm whitespace-pre-line">Thinking</p>
                    <span className="inline-block w-8 text-sm">{dots}</span>
                  </div>
                </Bubble>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="pt-2 pb-2">
            <div className="px-1 flex gap-2">
              <Input
                placeholder="Ask about game recommendations, details, or gaming topics..."
                bg="white"
                className="flex-1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />

              <Button
                className="px-5 py-2"
                bg="#fefcd0"
                textColor="black"
                borderColor="black"
                shadow="#c381b5"
                onClick={handleSendMessage}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
