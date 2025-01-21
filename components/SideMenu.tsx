'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHeart, faBook, faFaceSadTear, faFaceKissWinkHeart } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

function SideMenu() {
  const pathname = usePathname();

  return (
    <aside className="min-h-screen w-[260px] bg-[#13100fd0] border-r border-accent hidden md:flex">
      <div className="flex flex-col gap-5 pt-16 pl-4">
        {items.map((item) => (
          <div key={item.title}>
            <Link
              href={item.url}
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
              prefetch={true}
            >
              <FontAwesomeIcon icon={item.icon} className='m' />
              <span className='text-center mt-1'>{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SideMenu;
