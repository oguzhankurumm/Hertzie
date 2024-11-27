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
  artwork: string | null;
  url: string;
  bitrate?: number;
  language?: string;
  location?: string;
  videoUrl: string | null;
  type: SongType;
  isFavorite: boolean;
};

export interface SongsState {
  songs: SongItem[] | null;
  setSongs: (songs: SongItem[]) => Promise<void>;
  currentSong: SongItem | null;
  playingFrom: string;
  setPlayingFrom: (playingFrom: string) => void;
  setCurrentSong: (song: SongItem) => void;
  isPlaying: boolean;
  togglePlaying: () => void;
  addFavorite: (songId: string) => Promise<void>;
  removeFavorite: (songId: string) => Promise<void>;
  toggleFavorite: (songId: string) => Promise<void>;
  addToList: (listId: string, songId: string) => Promise<void>;
  removeFromList: (listId: string, songId: string) => Promise<void>;
  playedSongIds: string[];
  setPlayedSongIds: (songIds: string[]) => void;
  shuffleMode: boolean;
  toggleShuffleMode: () => void;
  repeatMode: boolean;
  toggleRepeatMode: () => void;
  onNextSongPress: () => void;
  onPreviousSongPress: () => void;
}

export const useSongsStore = createMobileStoreWithMiddlewares<SongsState>((set, get) => ({
  songs: popularDummySongs, // Initial state

  playingFrom: 'Songs',
  setPlayingFrom: (playingFrom: string) => {
    set({ playingFrom });
  },

  setSongs: async (songs: SongItem[]) => {
    set({ songs });
  },
  currentSong: null,
  setCurrentSong: (song: SongItem) => {
    set({ currentSong: song, isPlaying: true });
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
  addToList: async (_listId: string, _songId: string) => {
    // Implement addToList logic here
  },
  removeFromList: async (_listId: string, _songId: string) => {
    // Implement removeFromList logic here
  },

  onNextSongPress: () => {},
  onPreviousSongPress: () => {},

  shuffleMode: false,
  toggleShuffleMode: () => {
    set(state => ({ shuffleMode: !state.shuffleMode }));
  },

  repeatMode: false,
  toggleRepeatMode: () => {
    set(state => ({ repeatMode: !state.repeatMode }));
  },

  playedSongIds: [],
  setPlayedSongIds: (songIds: string[]) => {
    set({ playedSongIds: songIds });
  },
}));
