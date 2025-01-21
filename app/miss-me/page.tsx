"use client";

import { useFavoritesStore } from "@/store/favoriteStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as OutlineHeart } from "@fortawesome/free-regular-svg-icons";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

const messages = [
  "Distance suck, missing you is hard but I am grateful to have someone like you that is worth missing. I look forward to the day when we can finally be together in person.",
  "We have so much to talk about, so many activities to do.That will happen very soon. Thank you for always being there for me no matter how far apart we are",
  "This very momemnt as you are reading this, I am missing you too. I know that because while writing this, I was missing you and I had a big smile on my face.",
];

const MissMePage = () => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

  const toggleFavorite = (message: string) => {
    if (favorites.includes(message)) {
      removeFavorite(message);
    } else {
      addFavorite(message);
    }
  };

  return (
    <div className="relative mx-auto min-h-screen p-4 bg-gradient-to-r from-emerald-500 to-emerald-900">
      <Image
        src="/assets/images/hands.png"
        alt="hands"
        width={160}
        height={160}
        className='absolute top-10 left-0 animate-move'
      />
      <Image
        src="/assets/images/holding.png"
        alt="holding"
        width={160}
        height={160}
        className='absolute bottom-10 right-0 animate-move'
      />

      <div className="flex items-center justify-end md:hidden mb-4 pl-3">
        <MobileNav />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {messages.map((message, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md flex flex-col justify-between glass-container"
          >
            {/* Message Content */}
            <p className="text-gray-300 mb-4">{message}</p>

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(message)}
              className="self-end text-red-500 cursor-pointer"
              aria-label="Add to favorites"
            >
              <FontAwesomeIcon
                icon={favorites.includes(message) ? SolidHeart : OutlineHeart}
                size="lg"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissMePage;
