import { AVAILABLELOGINATTEMPTS } from "@/constants";
import { create } from "zustand";

interface PersistentStoreType {
    registeredNumbers: string[],
    loginAttemptsLeft: number,
    reduceLoginAttemptsLeft: () => void,
    resetLoginAttemptsLeft: () => void,
    addRegisteredNumber: (newValue: string) => void,
    setRegisteredNumber: (newValues: string[]) => void,
};

const usePersistentStore = create<PersistentStoreType>((set, get) => {

    type RegisteredNumberType = PersistentStoreType["registeredNumbers"][number];

    return {
        loginAttemptsLeft: AVAILABLELOGINATTEMPTS,
        registeredNumbers: ['695979882', '675747427'],

        addRegisteredNumber: (newValue: RegisteredNumberType) => {
            const state = get();
            set({ registeredNumbers: [...state.registeredNumbers, newValue] });
        },

        removeRegisteredNumber: (valueToRemove: RegisteredNumberType) => {
            const state = get();
            set({ registeredNumbers: state.registeredNumbers.filter((number) => number !== valueToRemove) });
        },

        reduceLoginAttemptsLeft() {
            const state = get();
            state.loginAttemptsLeft--;
        },

        resetLoginAttemptsLeft() {
            const state = get();
            state.loginAttemptsLeft = AVAILABLELOGINATTEMPTS;
        },

        setRegisteredNumber: (newValues: RegisteredNumberType[]) => {
            set({ registeredNumbers: newValues });
        }
    }
});

export default usePersistentStore;