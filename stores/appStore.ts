import { CategoryType, Service, User } from '@/types';
import { create } from 'zustand';

interface appStoreType {
    isLoading: boolean;
    serviceList: Service[];
    categoryList: CategoryType[];
    currentService?: Service | null;
    currentCategory?: CategoryType | null;

    setServiceList: (newValue: Service[]) => void;
    setCategoryList: (newValue: CategoryType[]) => void;
    setCurrentService: (newValue: Service) => void;
    setCurrentCategory: (newValue: CategoryType) => void;
    push: (varType: 'service' | 'category', newList: Service[] | CategoryType[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    
    // Account defined settings
    accountData: User | null | {};
    setAccountData: (newData: User) => void;
};

const useAppStore = create<appStoreType>((set, get) => ({
    isLoading: false,

    serviceList: [],

    categoryList: [],

    currentService: null,

    currentCategory: null,

    accountData: {},

    setIsLoading: (newValue) => set({ isLoading: newValue }),

    setServiceList: (newList) => set({ serviceList: newList }),

    setCategoryList: (newList) => set({ categoryList: newList }),

    setCurrentService: (newValue) => set({currentService: newValue}),

    setCurrentCategory: (newValue) => set({currentCategory: newValue}),

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
    },

    setAccountData: (newValue) => {
        const state = get();
        state.accountData = newValue;
    }
}));

export default useAppStore;