"use client";

import { Game } from "@/types";
import { Button, Card, Popup } from "pixel-retroui";
import Image from "next/image";
import { useState } from "react";

export default function GameCard({ game }: { game: Game }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Card className="h-24 w-24">
          <Image
            src={game.background_image}
            alt={game.name}
            width={100}
            height={100}
            className="h-full! w-full! object-cover"
          />
        </Card>

        <div className="flex flex-col justify-center gap-2 flex-1">
          <p className="line-clamp-2">{game.name}</p>

          <div className="flex gap-2">
            <p className="text-xs">
              <b>Rating:</b> {game.rating}/5
            </p>
            <Image
              src="/star.png"
              alt="star"
              width={10}
              height={10}
              className="w-4 h-3 object-contain"
            />
          </div>

          <p className="text-xs">
            <b>Release Date:</b> {game.released}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs">
          <b>Genres:</b>{" "}
          {game.genres
            .slice(0, 2)
            .map((genre) => genre.name)
            .join(", ")}
        </p>

        <p className="text-xs line-clamp-1">
          <b>Platforms:</b>{" "}
          {game.platforms
            .slice(0, 2)
            .map((platform) => platform.platform.name)
            .join(", ")}
        </p>
      </div>

      <Button
        bg="#fefcd0"
        textColor="black"
        borderColor="black"
        shadow="#c381b5"
        onClick={() => setIsPopupOpen(true)}
      >
        Visit Stores
      </Button>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        bg="#fefcd0"
        baseBg="#c381b5"
        textColor="black"
        borderColor="black"
      >
        <div className="w-96">
          <p className="text-lg font-bold">Visit Stores</p>
          <p className="text-sm mt-2">({game.name})</p>

          <div className="flex flex-col gap-2 mt-5">
            {game.storeLinks.length > 0 ? (
              game.storeLinks.map((link) => (
                <Button
                  key={link.store.id}
                  bg="#fefcd0"
                  textColor="black"
                  borderColor="black"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {link.store.name}
                </Button>
              ))
            ) : (
              <p className="text-sm">No stores found</p>
            )}
          </div>
        </div>
      </Popup>
    </Card>
  );
}
