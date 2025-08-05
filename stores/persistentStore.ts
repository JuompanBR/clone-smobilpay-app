import { create } from "zustand";

interface PersistentStoreType {
    registeredNumbers: string[]
};

const usePersistentStore = create<PersistentStoreType>((set, get) => {

    type RegisteredNumberType = PersistentStoreType["registeredNumbers"][number];
    return {

        registeredNumbers: ['695979882', '675747427'],

        addRegisteredNumber: (newValue: RegisteredNumberType) => {
            const state = get();
            set({ registeredNumbers: [...state.registeredNumbers, newValue] });
        },

        removeRegisteredNumber: (valueToRemove: RegisteredNumberType) => {
            const state = get();
            set({ registeredNumbers: state.registeredNumbers.filter((number) => number !== valueToRemove) });
        },

        setRegisteredNumber: (newValues: RegisteredNumberType[]) => {
            set({ registeredNumbers: newValues });
        }
    }
});

export default usePersistentStore;