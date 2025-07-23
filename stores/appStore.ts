import { CategoryType, Service } from '@/types';
import { create } from 'zustand';

interface appStoreState {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    serviceList: Service[];
    categoryList: CategoryType[];
    setServiceList: (newValue: Service[]) => void;
    setCategoryList: (newValue: CategoryType[]) => void;
    push: (varType: 'service' | 'category', newList: Service[] | CategoryType[]) => void;
};

const useAppStore = create<appStoreState>((set, get) => ({
    isLoading: false,

    serviceList: [],

    categoryList: [],

    setIsLoading: (newValue) => set({ isLoading: newValue }),

    setServiceList: (newList) => set({ serviceList: newList }),

    setCategoryList: (newList) => set({ categoryList: newList }),

    push: (varType = 'service', newData) => {
        const state = get();
        switch (varType.toLocaleLowerCase()) {
            case 'service':
                set({ serviceList: [...state.serviceList, ...(newData as Service[])] });
                break;
            case 'category':
                set({ categoryList: [...state.categoryList, ...(newData as CategoryType[])] });
                break;
            default:
                throw new Error("Please specify a valid list to push the data into.");
        }
        return;
    }
}));

export default useAppStore;