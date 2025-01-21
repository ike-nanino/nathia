"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHeart, faBook, faFaceSadTear, faFaceKissWinkHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const items = [
    {
      title: 'Home',
      url: '/',
      icon: faHouse,
    },
    {
      title: 'Missing Me?',
      url: '/miss-me',
      icon: faFaceKissWinkHeart,
    },
    {
      title: 'Feeling Sad?',
      url: '/sad',
      icon: faFaceSadTear,
    },
    {
      title: 'Poems',
      url: '/poems',
      icon: faBook,
    },
    {
      title: 'Favorites',
      url: '/favorites',
      icon: faHeart,
    },
];

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center" asChild>
        <button
          className="flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
            <FontAwesomeIcon icon={faBars} className="text-base font-semibold text-white" />
          
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col  border-none shadow-none w-[260px] h-screen"
      >
        <SheetTitle className="sr-only">
          IBV
        </SheetTitle>

        <nav className="flex flex-col justify-center items-center gap-8">
          {items.map((item) => {
            return (
              <Link
                href={item.url}
                key={item.title}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md capitalize ${
                    item.url === pathname
                      ? {
                          '/miss-me': 'bg-gradient-to-l from-emerald-500 to-emerald-900 text-gray-300 font-semibold text-base',
                          '/sad': 'bg-gradient-to-l from-stone-500 to-stone-700 text-gray-300 font-semibold text-base',
              
                          '/poems': 'bg-gradient-to-l from-slate-500 to-slate-800 text-gray-300 font-semibold text-base',
                          '/favorites': 'bg-gradient-to-l from-violet-200 to-pink-200  text-red-500 font-semibold text-base',
                          '/': 'bg-gradient-to-l from-amber-200 to-yellow-500 text-gray-300 font-semibold text-base',
                        }[item.url]
                      : {
                          '/miss-me': 'text-white hover:bg-gradient-to-l from-emerald-500 to-emerald-900 hover:text-gray-300',
                          '/sad': 'text-white hover:bg-gradient-to-l from-stone-500 to-stone-700 hover:text-gray-300',
                          '/affirmations': 'text-white hover:bg-gradient-to-l from-purple-500 to-purple-900 hover:text-gray-300',
                          '/poems': 'text-white hover:bg-gradient-to-l from-slate-500 to-slate-800 hover:text-gray-300',
                          '/favorites': 'text-white hover:bg-gradient-to-l from-violet-200 to-pink-200  hover:text-red-500',
                          '/': 'text-white hover:bg-gradient-to-l from-amber-200 to-yellow-500 hover:text-gray-300',
                        }[item.url]
                  } transition ease-in-out duration-300`}
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;