'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHeart, faBook, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
config.autoAddCss = false;

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';



// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: faHouse,
  },
  {
    title: 'Missing Me?',
    url: '/miss-me',
    icon: faHouse,
  },
  {
    title: 'Feeling Sad?',
    url: '/sad',
    icon: faHouse,
  },
  {
    title: 'Weekly Affirmations',
    url: '/affirmations',
    icon: faBookOpenReader,
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

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="h-screen text-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold text-gray-300 px-4 py-2">
            Nathia
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4 px-4 py-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-md capitalize ${
                        item.url === pathname
                          ? 'bg-green-300 text-green-600 font-semibold text-base'
                          : 'text-black hover:bg-green-300 hover:text-green-600'
                      } transition ease-in-out duration-300`}
                      prefetch={true}
                    >
                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
