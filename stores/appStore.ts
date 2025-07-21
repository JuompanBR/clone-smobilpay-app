import { create } from 'zustand';

interface appStoreState {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
};

const useAppStore = create<appStoreState>((set) => ({
    isLoading: false,
    setIsLoading: (newValue) => set({ isLoading: newValue }),
}));

export default useAppStore;