"use client";

import { useFavoritesStore } from "@/store/favoriteStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as OutlineHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";


const messages = [
  " I am not really good at being vocal about my feelings so I do not say this enough. You are the reason I am still here. You were there on the worst days and you kept me going. So when you are feeling sad about life or anything? Know that you are the reaon why I smile. I hope that makes you happy.",
  " I wish I could wrap you in my arms right now and tell you how much you mean to me. Until then, imagine me holding you close, tracing the stars on your skin, and promising you forever. I will always be your biggest supporter and will be there for you always, anytime you call on me.",
  "I have loved you every second of every day since the moment I met you and I will love you every second until I die. If you ever feel like you have no one, you have me. I have never wanted to be with anyone more than I want to be with you. If you ever feel unloved, I hope this particular card can remind you of my love for you.",
  "Thank you for making me feel comfortable being who I am, thank you for listening to my problems even when you had so much stuff going on in your life. Thank you for being the amazing person that you are. You are definitely the best thing that have ever happened to me. ",
  "I still remember the butterflies I got the first few days when we started talking. There is a reason why I remember them so vividly and that is because I still get them to this very day. My excitment for you never went away, even on days where I did not have much to say or days where i felt down or sad. ",
  "I have become addicted to everything that involves you, every word and every action, I am addicted to you, and now I need you in every aspect of my life to survive. I don't want to do life without you. Life without you will be meaningless, life without you will be aimless.",
];

const Sad = () => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

 
  const toggleFavorite = (message: string) => {
    if (favorites.includes(message)) {
      removeFavorite(message);
    } else {
      addFavorite(message);
    }
  };

  return (
    <div className="relative mx-auto min-h-screen p-4 bg-gradient-to-r from-stone-500 to-stone-700">

      
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


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {messages.map((message, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md flex flex-col justify-between glass-container"
          >
            <p className="text-gray-200 mb-4">{message}</p>
            <button
              onClick={() => toggleFavorite(message)}
              className="self-end text-red-500"
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

export default Sad;
