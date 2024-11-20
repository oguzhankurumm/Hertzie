import { popularDummySongs } from '_utils/dummy';

import { createMobileStoreWithMiddlewares } from './createMobileStoreWithMiddlewares';

export enum SongType {
  Audio = 'audio',
  Video = 'video',
  Radio = 'radio',
}

export type SongItem = {
  id: string;
  title: string;
  artists: string[];
  album: string;
  genre: string;
  duration: number;
  artwork: string;
  url: string;
  videoUrl: string | null;
  type: SongType;
  isFavorite: boolean;
};

export interface SongsState {
  songs: SongItem[] | null;
  setSongs: (songs: SongItem[]) => Promise<void>;
  currentSong: SongItem | null;
  setCurrentSong: (song: SongItem) => void;
  isPlaying: boolean;
  togglePlaying: () => void;
  addFavorite: (songId: string) => Promise<void>;
  removeFavorite: (songId: string) => Promise<void>;
  toggleFavorite: (songId: string) => Promise<void>;
  addToList: (listId: string, songId: string) => Promise<void>;
  removeFromList: (listId: string, songId: string) => Promise<void>;
}

export const useSongsStore = createMobileStoreWithMiddlewares<SongsState>((set, get) => ({
  songs: popularDummySongs, // Initial state

  setSongs: async (songs: SongItem[]) => {
    set({ songs });
  },
  currentSong: null,
  setCurrentSong: (song: SongItem) => {
    set({ currentSong: song });
  },
  isPlaying: false,
  togglePlaying: () => {
    set(state => ({ isPlaying: !state.isPlaying }));
  },
  addFavorite: async (songId: string) => {
    const { songs } = get();
    if (songs) {
      const updatedSongs = songs.map(song =>
        song.id === songId ? { ...song, isFavorite: true } : song
      );
      set({ songs: updatedSongs });
    }
  },
  removeFavorite: async (songId: string) => {
    const { songs } = get();
    if (songs) {
      const updatedSongs = songs.map(song =>
        song.id === songId ? { ...song, isFavorite: false } : song
      );
      set({ songs: updatedSongs });
    }
  },
  toggleFavorite: async (songId: string) => {
    const { songs } = get();
    if (songs) {
      const updatedSongs = songs.map(song =>
        song.id === songId ? { ...song, isFavorite: !song.isFavorite } : song
      );
      set({ songs: updatedSongs });
    }
  },
  addToList: async (listId: string, songId: string) => {
    // Implement addToList logic here
  },
  removeFromList: async (listId: string, songId: string) => {
    // Implement removeFromList logic here
  },
}));
