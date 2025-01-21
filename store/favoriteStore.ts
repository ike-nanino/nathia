import { create } from 'zustand'
import { persist } from "zustand/middleware"

interface FavoritesState {
  favorites: string[]; // Array of favorite messages
  addFavorite: (message: string) => void;
  removeFavorite: (message: string) => void;
}

export const useFavoritesStore = create(
  persist<FavoritesState>(
    (set) => ({
      favorites: [],
      addFavorite: (message) =>
        set((state) => ({
          favorites: [...state.favorites, message],
        })),
      removeFavorite: (message) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== message),
        })),
    }),
    {
      name: "favorites-storage", // Key to store in localStorage
    }
  )
);
