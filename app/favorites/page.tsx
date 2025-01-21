"use client";

import MobileNav from "@/components/MobileNav";
import { useFavoritesStore } from "@/store/favoriteStore";
import Image from "next/image";

const FavoritesPage = () => {
  const { favorites } = useFavoritesStore();

  return (
    <div className="relative mx-auto min-h-screen p-4 bg-gradient-to-r from-violet-200 to-pink-200">
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


      




      {favorites.length === 0 ? (
        <div className="container flex flex-col items-center justify-center w-96 h-96 pt-16 mx-auto">
          <Image
            src="/assets/icons/sad.png"
            alt="sad"
            width={100}
            height={100}
            className="mb-8"
          />

          <h1 className="text-lg font-semibold">No favorites yet</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {favorites.map((message, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-md flex flex-col justify-between glass-container"
            >
              <p className="text-black mb-4">{message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
