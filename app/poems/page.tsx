"use client";

import { useFavoritesStore } from "@/store/favoriteStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as OutlineHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";


const messages = [
  " I hope you never forget how much you mean to me, how you make me feel so seen and so loved. I was incomplete, I was half a man, you made me whole. A whole other person, a whole person who wants to stretch themself for you. Learn new things for you. I never knew how to pray, but I am praying harder than ever, for me and you.",
  "Let's build a home together, somewhere our love lasts forever. Let's build it from scratch, from the floor to the ceiling, a sancity where we can focus on healing, picking windows that let the right light enter our hearts. The perfect shaped doors where adventures start. We can paint the walls together so our love is in every coat. We will plant trees that will grow with our love and we will keep building until it is enough. We will get there, bit by bit, piece by piece. We will build a home for our souls to find peace.",
];

const Poems = () => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

  const toggleFavorite = (message: string) => {
    if (favorites.includes(message)) {
      removeFavorite(message);
    } else {
      addFavorite(message);
    }
  };

  return (
    <div className="relative mx-auto min-h-screen p-4 bg-gradient-to-r from-slate-500 to-slate-800">


      
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

export default Poems;
